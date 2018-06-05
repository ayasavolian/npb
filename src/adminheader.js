import React, { Component } from 'react';
import './global.css'
import './header.css';
import './adminheader.css';
import Admin from './admin'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaBars from 'react-icons/lib/fa/bars';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import $ from 'jquery';

class AdminHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="header-container">
          <div className="header-inner-container font-color-white">
            <div className="admin-header-logo font-size-18 float-left display">
              <Link to="/admin/session">
                Create Post
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHeader;
