import Note from './Note';
import Newsletter from './Newsletter';
import Headliner from './Headliner';
import React, { Component } from 'react';
import './header.css';
import './global.css';
import './articles.css';
import {Link } from 'react-router';
import FaClockO from 'react-icons/lib/fa/clock-o';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $ from 'jquery';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Article extends Component {
  render(){
    let image = images[this.props.article.header_image.image_dir];
    var articleDate = new Date(this.props.article.created_date.replace(/\s/, 'T'));
    let articleDateRef = (articleDate.getMonth()+1) + "/" + articleDate.getDay() + "/" + articleDate.getFullYear();
    return (
      <div className = "body-inner-container-content article display margin-top-35">
        <div className = "article-image-container float-left">
          <img className = "article-image-size" src = {image} alt={"logo"} />
        </div>
        <div className = "article-content-text-container float-left">
          <div className = "article-content-title font-size-22">
            { this.props.article.title }
          </div>
          <div className = "article-content-section-container font-size-14 display">
            <div className = "article-content-section font-color-green font-weight-100 float-left">
              { this.props.article.section.section }
            </div>
          </div>
          <div className = "article-content-read-time font-size-14">
            <FaClockO style={{'vertical-align': 'top', 'color': '#505050'}}/> { this.props.article.read_time } mins
          </div>
          <div className = "article-content">
            { this.props.article.header_text }
          </div>
          <div className = "article-content-footer display font-size-14">
            <div className = "article-content-footer-created-by float-left">
              written by : { this.props.article.created_by.first } { this.props.article.created_by.last } 
            </div>
            <div className = "article-content-footer-created-date float-right">
              { articleDateRef }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreArticlesIterator : 0,
      moreArticles : []
    };
    this.addToMoreArticles = this.addToMoreArticles.bind(this);
  }

  addToMoreArticles() {
    var moreArticlesJoined = this.state.moreArticles;
    for (var z = 0; z < this.props.allArticles.articles[this.state.moreArticlesIterator].length; z++){
      moreArticlesJoined = moreArticlesJoined.concat(this.props.allArticles.articles[this.state.moreArticlesIterator][z]);
    }
    var moreArticlesIteratorUpdated = this.state.moreArticlesIterator += 1;
    this.setState({ 
      moreArticles: moreArticlesJoined,
      moreArticlesIterator: moreArticlesIteratorUpdated
    })
  }

  componentDidMount(){}

  componentWillReceiveProps(nextProps){
    if (this.props.filter !== nextProps.filter){
      this.setState({
        moreArticlesIterator : 0,
        moreArticles : []
      })
    }
  }


  render(){
      const articles = this.props.articles.articles.map(function(article, index){
        return (index === 0) ? <Headliner article= { article } homePage = "True" /> : <Article article= { article } />;
      })
      var moreArticlesToShow = this.state.moreArticles.map(function(article, index){
        return <Article article= { article } />;
      })
      var showMoreArticlesOption = (this.state.moreArticlesIterator != this.props.allArticles.articles.length);
      return (
        <div>
          <div className = "body-inner-container">
            {articles}
            {moreArticlesToShow}
            {showMoreArticlesOption ? <div className = "more-articles-clicker-container font-color-white font-size-24 font-weight-100" onClick = {this.addToMoreArticles}>Show me more articles</div> : null}
          </div>
          <Note /> 
          <Newsletter /> 
        </div>
      )
  }
}

export default Articles;
