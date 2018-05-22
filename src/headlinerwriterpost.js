import React, { Component } from 'react';
import './global.css';
import './headliner.css';
import {Link } from 'react-router';
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

class HeadlinerWriterPost extends Component {
  render(){
    let writerPhoto = images[this.props.article.created_by.photo]
    return (
      <div className = "headliner-content-post-writer">
        <div className = "writer-photo-container float-left">
          <img className = "writer-photo" src = {writerPhoto} alt = "image" />
        </div>
        <div className = "writer-info-container float-left">
          <div className = "writer-name">
            {this.props.article.created_by.first} {this.props.article.created_by.last}
          </div>
          <div className = "writer-status">
            {this.props.article.article_user_status}
          </div>
        </div>
      </div>
    )
  }
}

export default HeadlinerWriterPost;
