import Note from './Note';
import Newsletter from './Newsletter';
import Headliner from './Headliner';
import Article from './Article';
import React, { Component } from 'react';
import './header.css';
import './global.css';
import './articles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FaClockO from 'react-icons/lib/fa/clock-o';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import $ from 'jquery';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

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
        return (index === 0) ? <Headliner article= { article } homePage = "False" /> : <Article article= { article } />;
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
