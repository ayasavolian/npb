import React, { Component } from 'react';
import './header.css';
import './global.css'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaBars from 'react-icons/lib/fa/bars';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';
import App from './App';



class Slidey extends Component {

  componentDidMount() {
    $(".slidey-container").animate({"margin-right": this.props.slideyWidth});
  }

  render() {
    return (
      <div>
        <div className = "slidey-background-clicker" style = {{"display": this.props.background}} onClick = {this.props.hideSlidey}>
        </div>
        <div className = "slidey-container font-weight-100">
          <div className = "slidey-inner-container">
            <div className = "slidey-inner-top-container display font-color-white background-color-green">
              <div className = "slidey-close-container display font-size-24">
                <div className = "slidey-exit">
                  <div className = "slidey-exit-button cursor" onClick = {this.props.hideSlidey}>
                    X
                  </div>
                </div>
              </div>

              <div className = "slidey-option-container display">
                <div className = "slidey-option font-size-28">
                  <Link to="/" onClick = {this.props.hideSlidey} component={App}>Home</Link>
                </div>
                <div className = "slidey-option font-size-28">
                  <Link to="/?filter=finance" onClick = {this.props.hideSlidey} component={App}>Personal Finance</Link>
                </div>
                <div className = "slidey-option font-size-28">
                  <Link to="/?filter=stock" onClick = {this.props.hideSlidey} component={App}>Stock Market Investing</Link>
                </div>
                <div className = "slidey-option font-size-28">
                  <Link to="/?filter=crypto" onClick = {this.props.hideSlidey} component={App}>Crypto Currency Investing</Link>
                </div>
              </div>
            </div>
          </div>
          <div className = "line1"></div>
          <div className = "slide-inner-bottom-container">
            <div className = "slidey-inner-top-container display">
              <div className = "slidey-option-container display">
                <div className = "slidey-option font-size-24 font-color-green">
                  About
                </div>
                <div className = "slidey-option font-size-24 font-color-green">
                  Contact
                </div>
                <div className = "slidey-option font-size-24 font-color-green">
                  Newsletter
                </div>
                <div className = "slidey-option font-size-24 font-color-green">
                  Terms
                </div>
                <div className = "slidey-option font-size-24 font-color-green">
                  Privacy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideyVisible : false,
      showBackground: "none",
      slideyWidth : "-500px"
    };
    this.updateSlideyMargin = this.updateSlideyMargin.bind(this);
  }

  updateSlideyMargin(){
    var newSlideyVisible = true;
    var newShowBackground = "block"
    var newSlideyWidth = "0px";
    if (this.state.slideyVisible === true){
      newSlideyVisible = false; 
      newShowBackground = "none";
      newSlideyWidth = "-500px";
    }
    this.setState(prevState => ({
      slideyVisible : newSlideyVisible,
      showBackground : newShowBackground,
      slideyWidth : newSlideyWidth
    }));
  }

  render() {

    const url = "https://google.com";

    return (
      <div>
        { this.state.slideyVisible ? <Slidey background = {this.state.showBackground} hideSlidey = {this.updateSlideyMargin.bind(this)} slideyWidth = {this.state.slideyWidth} /> : <div></div> }
        <div className="header-container">
          <div className="header-inner-container font-color-white">
            <div className="header-logo font-size-24 float-left display">
              newpiggybank
            </div>
            <div className="header-menu font-size-28 float-right display">
                <div className="header-menu-item display">
                  <a href = {url}><FaFacebookOfficial style={{'vertical-align': 'top'}}/></a>
                </div>
                <div className="header-menu-item display">
                  <a href = {url}><FaInstagram style={{'vertical-align': 'top'}}/></a>
                </div>
              <div className="header-menu-item display">
                <FaTwitter style={{'vertical-align': 'top'}}/>
              </div>
              <div className="header-menu-item display cursor" onClick = {this.updateSlideyMargin} >
                <FaBars style={{'vertical-align': 'top'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
