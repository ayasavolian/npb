import React, { Component } from 'react';
import './headliner.css';
import './global.css';
import HeadlinerWriterPost from './headlinerwriterpost';
import App from './app';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaPencil from 'react-icons/lib/fa/pencil';
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
    let image = this.props.imageDir;
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
      <div className = "display">
        { headlinerDateRef }
      </div>
    )
  }
}

class HeadlinerWriterHome extends Component {
  render(){
    return (
      <div className = "headliner-content-writer">
        written by : { this.props.first } { this.props.last }
      </div>
    )
  }
}

class HeadlinerPost extends Component {
  render(){
    return(
      <div className = "article-content-read-time font-size-14">
        <FaClockO style={{'vertical-align': 'top', 'color': ' #505050'}}/> { this.props.readTime } mins, <FaPencil style={{'vertical-align': 'top', 'color': ' #505050'}}/> <HeadlinerDate createdDate = { this.props.createdDate } />
      </div>
    )
  }
}

class Headliner extends Component {
  render(){
    let postPageRender = (this.props.homePage !== "True") ? <HeadlinerPost readTime = { this.props.article.read_time } createdDate = { this.props.article.created_date } /> : null;
    let contentBuffer = (this.props.homePage !== "True") ? <div className = "headliner-content-extra-buffer display"></div> : <div className = "headliner-content-buffer display"></div>;
    let headlinerWriterRender = (this.props.homePage !== "True") ? <HeadlinerWriterPost article = { this.props.article } /> : <HeadlinerWriterHome first = { this.props.article.created_by.first } last = { this.props.article.created_by.last } />
    let articleLink = "/post/" + this.props.article.post_name + this.props.article.post_uuid;
    return (
      <div className = "headliner-content-container display">
        <Link to = {articleLink}  component={App} style={this.props.homePage === "True" ? "cursor: pointer" : null }>
          <HeadlinerImage imageDir = {this.props.article.header_image.image_dir} />
          <div className = "headliner-content-text-container">
            <div className = "headliner-content-text">
              <HeadlinerTitle title = { this.props.article.title } />
              {postPageRender}
              {this.props.homePage === "True" ? <div className = "headliner-content-brief"><HeadlinerDate createdDate = { this.props.article.created_date } /></div> : null}
              {headlinerWriterRender}
            </div>
          </div>
        </Link>
        {contentBuffer}
      </div>
    )
  }
}

export default Headliner;
