import Headliner from './Headliner';
import React, { Component } from 'react';
import './global.css';
import './post.css';
import {Link } from 'react-router';
import { FacebookButton, TwitterButton } from "react-social";
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaTwitter from 'react-icons/lib/fa/twitter';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $ from 'jquery';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
var _ = require('lodash');

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

class PostBody extends Component {
  render(){
    let html = this.props.article.body;
    return (
      <div className = "body-inner-container-content post">
        <div className = "post-content font-size-18">
          { ReactHtmlParser(html) }
        </div>
      </div>
    )
  }
}

class FacebookButtonRender extends Component {
  render(){
    return (
      <div className = "post-side-bar-social">
      <FaFacebookOfficial width = "2.5em" height = "2.5em" style = "cursor: pointer" onClick = {this.props.onClick} />
      </div>
    )
  }
}

class TwitterButtonRender extends Component {
  render(){
    return (
      <div className = "post-side-bar-social">
      <FaTwitter width = "2.5em" height = "2.5em" style = "cursor: pointer" onClick = {this.props.onClick} />
      </div>
    )
  }
}


class PostSideBar extends Component {
  render(){
    let thumbsUpImg = images["thumbs_up.png"];
    let pageLocation = window.location.href;
    return (
      <div className = "post-side-bar-container">
        <div className = "post-side-bar-inner-container display">
          <div className = "post-side-bar-option post-likes-margin-bottom">
            {this.props.article.upvotes}
          </div>
          <div className = "post-side-bar-option">
            <div className = "thumbs-option">
              <img className = "thumbs-up" src = {thumbsUpImg} alt = "image" />
            </div>
          </div>
          <div className = "post-side-bar-option">
            <FacebookButton element = {FacebookButtonRender} appId = "200569610730855" />
          </div>
          <div className = "post-side-bar-option">
            <TwitterButton element = {TwitterButtonRender} appId = "200569610730855" />
          </div>
        </div>
      </div>
    )
  }
}

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      transform : 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    console.log($(window).scrollTop());

    this.setState({
      transform: $(window).scrollTop()
    });
  }


  render(){

    let flattenedArticles = _.flattenDeep(this.props.articles.articles);
    let id = this.props.articleId.params.id
    let article = _.filter(flattenedArticles, function(article){
      return id.includes(article.post_uuid);
    });
    let articleUsed = article[0]
    let renderPostSideBar = this.state.transform > 535 ? <PostSideBar article = {articleUsed} /> : null;
    return (
      <div className = "body-inner-container">
        <Headliner article={articleUsed} homePage = "False" />
        <PostBody article = {articleUsed} />
        {renderPostSideBar}
      </div>
    )
  }
}

export default Post;