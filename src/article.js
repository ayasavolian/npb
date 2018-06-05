import './articles.css';
import './global.css';
import App from './app';
import FaClockO from 'react-icons/lib/fa/clock-o';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


class Article extends Component {
  render(){
    let image = this.props.article.header_image.image_dir;
    var articleDate = new Date(this.props.article.created_date.replace(/\s/, 'T'));
    let articleDateRef = (articleDate.getMonth()+1) + "/" + articleDate.getDay() + "/" + articleDate.getFullYear();
    let articleLink = "/post/" + this.props.article.post_name + this.props.article.post_uuid;
    return (
      <div className = "body-inner-container-content article display margin-top-35">
        <Link to= {articleLink} component={App}>
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
        </Link>
      </div>
    )
  }
}

export default Article;
