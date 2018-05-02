import React, { Component } from 'react';
import './global.css';
import './headliner.css';
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

class HeadlinerImage extends Component {
  render(){
    let image = images[this.props.imageDir];
    return(
      <div className = "headliner-image display">
        <ReactCSSTransitionGroup
          transitionName="example" transitionAppear={true}
          transitionAppearTimeout={1000}>
           <img className = "headliner-image-size" src = {image} alt={"logo"} />
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

class HeadlinerTitle extends Component {
  render(){
    return(
      <div className = "headliner-content-title-container">
        <div className = "headliner-content-title">
          { this.props.title }
        </div>
      </div>
    )
  }
}

class HeadlinerDate extends Component {
  render(){
    var headlinerDate = new Date(this.props.createdDate.replace(/\s/, 'T'));
    let headlinerDateRef = (headlinerDate.getMonth()+1) + "/" + headlinerDate.getDay() + "/" + headlinerDate.getFullYear();
    return(
      <div className = "headliner-content-brief">
        { headlinerDateRef }
      </div>
    )
  }
}

class HeadlinerWriter extends Component {
  render(){
    console.log(this.props);
    return(
      <div className = "headliner-content-writer">
        written by : { this.props.first } { this.props.last }
      </div>
    )
  }
}

class HeadlinerPost extends Component {
  render(){
    console.log(this.props)
    return(
      <div className = "article-content-read-time font-size-14">
        <FaClockO style={{'vertical-align': 'top', 'color': ' #505050'}}/> { this.props.readTime } mins
      </div>
    )
  }
}

class Headliner extends Component {
  render(){
    let postPageRender = (this.props.homePage !== "True") ? <HeadlinerPost readTime = { this.props.article.read_time } /> : null;
    let contentBuffer = (this.props.homePage !== "True") ? <div className = "headliner-content-extra-buffer display"></div> : <div className = "headliner-content-buffer display"></div>;
    console.log(this.props);
    return (
      <div className = "headliner-content-container display">
        <HeadlinerImage imageDir = {this.props.article.header_image.image_dir} />
        <div className = "headliner-content-text-container">
          <div className = "headliner-content-text">
            <HeadlinerTitle title = { this.props.article.title } />
            {postPageRender}
            <HeadlinerDate createdDate = { this.props.article.created_date } />
            <HeadlinerWriter first = { this.props.article.created_by.first } last = { this.props.article.created_by.last } />
          </div>
        </div>
        {contentBuffer}
      </div>
    )
  }
}

export default Headliner;
