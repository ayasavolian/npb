import Headliner from './headliner';
import HeadlinerWriterPost from './headlinerwriterpost';
import Article from './article';
import App from './app';
import React, { Component } from 'react';
import './global.css';
import './post.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

class PostBodyBottom extends Component {
  render(){
    let thumbsUpImg = images["thumbs_up.png"];
    return (
      <div className = "post-content-bottom-section">
        <div className = "post-content-bottom-section-container display">
          <div className = "post-content-bottom-text-container">
            <div className = "post-content-bottom-text-larger font-size-24">
              Dig this piece? Give it a thumbs up!
            </div>
            <div className = "post-content-bottom-text-smaller font-size-16">
              Or share it on social! Liking and sharing lets us know what content pieces stand out. 
            </div>
          </div>
          <div className = "post-content-like-and-share-container display">
            <div className = "post-content-like-and-share-inner-container">
              <div className = "share-content bigger-thumbs-option float-left">
                <img className = "bigger-thumbs-up" src = {thumbsUpImg} alt = "image" />
              </div>
              <div className = "share-content float-left">
                <FacebookButton element = {FacebookButtonLargerRender} appId = "200569610730855" />
              </div>
              <div className = "share-content float-left">
                <TwitterButton element = {TwitterButtonLargerRender} appId = "200569610730855" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class PostBody extends Component {
  render(){
    let html = this.props.article.body;
    return (
      <div className = "body-inner-container-content post">
        <div className = "post-content font-size-18">
          { ReactHtmlParser(html) }
        </div>
        <PostBodyBottom article = { this.props.article } />
      </div>
    )
  }
}

class FacebookButtonLargerRender extends Component {
  render(){
    return (
      <div>
      <FaFacebookOfficial width = "4em" height = "4em" style = "cursor: pointer" onClick = {this.props.onClick} />
      </div>
    )
  }
}

class TwitterButtonLargerRender extends Component {
  render(){
    return (
      <div>
      <FaTwitter width = "4em" height = "4em" style = "cursor: pointer" onClick = {this.props.onClick} />
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
  constructor(props){
    super(props);
    this.state = {
      transform : 0,
      thumbsUpImg : images["thumbs_up.png"],
      pageLocation : window.location.href
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
    this.setState({
      transform: $(window).scrollTop()
    });
  }

  render(){
    return (
      <div>
        {this.state.transform > 535 ?
        <div className = "post-side-bar-container">
          <div className = "post-side-bar-inner-container display">
            <div className = "post-side-bar-option post-likes-margin-bottom">
              {this.props.article.upvotes}
            </div>
            <div className = "post-side-bar-option">
              <div className = "thumbs-option">
                <img className = "thumbs-up" src = {this.state.thumbsUpImg} alt = "image" />
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
        :
        null
        }
      </div>
    )
  }
}

class RecommendedPosts extends Component {
  render(){
    let recommendedPostArticleImage = images[this.props.article.header_image.image_dir];
    let recommendedPostLink = "/post/" + this.props.article.post_name + this.props.article.post_uuid;
    return (
      <div className = "recommended-post-article display">
        <Link to= {recommendedPostLink} component={App}>
        <div className = "recommended-post-article-container">
          <img className = "recommended-post-article-image" src = {recommendedPostArticleImage} />
        </div>
        <div className = "recommended-post-article-title-container font-size-24">
          {this.props.article.title}
        </div>
        </Link>
      </div>
    )
  }
}

class Post extends Component {
  render(){
    let flattenedArticles = _.flattenDeep(this.props.articles.articles);
    let id = this.props.articleId.params.id
    let article = _.filter(flattenedArticles, function(article){
      return id.includes(article.post_uuid);
    });
    var articleUsed = article[0];
    var x = 0;
    let recommendedArticles = _.filter(flattenedArticles, function(currentArticle){
      if (articleUsed.post_uuid !== currentArticle.post_uuid && articleUsed.section.section === currentArticle.section.section && x < 6){
        x++;
        return currentArticle;
      }
    });
    var recommendedArticlesToShow = recommendedArticles.map(function(article, index){
      return <RecommendedPosts article= { article } />;
    })
    return (
      <div className = "body-inner-container">
        <Headliner article={articleUsed} homePage = "False" />
        <PostBody article = {articleUsed} />
        <PostSideBar article = {articleUsed} />
        <div className = "recommended-articles-container font-size-26">
          <div className = "recommended-articles-inner-container">
            Let us keep helping make that piggy bigger
          </div>
          <div className = "recommended-articles-sub-container font-size-22">
            With some other articles we think you'll like
          </div>
        </div>
        {recommendedArticlesToShow}
      </div>
    )
  }
}

export default Post;