import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './global.css';
import Articles from './Articles';
import Header from './Header';
import Footer from './Footer';

import registerServiceWorker from './registerServiceWorker';


const PAYLOAD = {
  articles : [{
    post_uuid : "TEST",
    section : {
      section : "crypto currency investing"
    },
    header_image : {
      header_image_uuid : "TEST",
      image_dir : "green-piggy.jpg"
    },
    header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
    post_status : {
      post_status : "approved"
    },
    title : "New Piggy Bank : Mastering Money for Gen Y",
    post_component : "TestComponent",
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
    read_time : 10,
    upvotes : 274,
    created_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    last_modified_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    created_date : "2018-04-07 16:27:03",
    modified_timestamp : "2018-04-07 16:27:03"
  },
  {
    post_uuid : "TEST",
    section : {
      section : "crypto currency investing"
    },
    header_image : {
      header_image_uuid : "TEST",
      image_dir : "green-piggy.jpg"
    },
    header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
    post_status : {
      post_status : "approved"
    },
    title : "New Piggy Bank : Mastering Money for Gen Y",
    post_component : "TestComponent",
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
    read_time : 10,
    upvotes : 274,
    created_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    last_modified_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    created_date : "2018-04-07 16:27:03",
    modified_timestamp : "2018-04-07 16:27:03"
  },
  {
    post_uuid : "TEST",
    section : {
      section : "crypto currency investing"
    },
    header_image : {
      header_image_uuid : "TEST",
      image_dir : "green-piggy.jpg"
    },
    header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
    post_status : {
      post_status : "approved"
    },
    title : "New Piggy Bank : Mastering Money for Gen Y",
    post_component : "TestComponent",
    body : "./TestComponent.js",
    read_time : 10,
    upvotes : 274,
    created_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    last_modified_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    created_date : "2018-04-07 16:27:03",
    modified_timestamp : "2018-04-07 16:27:03"
  },
  {
    post_uuid : "TEST",
    section : {
      section : "crypto currency investing"
    },
    header_image : {
      header_image_uuid : "TEST",
      image_dir : "green-piggy.jpg"
    },
    header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
    post_status : {
      post_status : "approved"
    },
    title : "New Piggy Bank : Mastering Money for Gen Y",
    post_component : "TestComponent",
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
    read_time : 10,
    upvotes : 274,
    created_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    last_modified_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    created_date : "2018-04-07 16:27:03",
    modified_timestamp : "2018-04-07 16:27:03"
  },
  {
    post_uuid : "TEST",
    section : {
      section : "crypto currency investing"
    },
    header_image : {
      header_image_uuid : "TEST",
      image_dir : "green-piggy.jpg"
    },
    header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
    post_status : {
      post_status : "approved"
    },
    title : "New Piggy Bank : Mastering Money for Gen Y",
    post_component : "TestComponent",
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
    read_time : 10,
    upvotes : 274,
    created_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    last_modified_by : {
      "user_uuid": "81822920",
      "email": "edward@newpiggybank.com",
      "first": "Edward",
      "last": "Gorbis"
    },
    created_date : "2018-04-07 16:27:03",
    modified_timestamp : "2018-04-07 16:27:03"
  }
  ]
}



const FULL_PAYLOAD = {
  articles : [
  [
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "./TestComponent.js",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "./TestComponent.js",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    }
  ],
  [
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "./TestComponent.js",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "./TestComponent.js",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    }
  ],
  [
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "./TestComponent.js",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "./TestComponent.js",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    },
    {
      post_uuid : "TEST",
      section : {
        section : "crypto currency investing"
      },
      header_image : {
        header_image_uuid : "TEST",
        image_dir : "green-piggy.jpg"
      },
      header_text : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque...",
      post_status : {
        post_status : "approved"
      },
      title : "New Piggy Bank : Mastering Money for Gen Y2",
      post_component : "TestComponent",
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\" style=\"float:none;height: auto;width: auto\"/><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      last_modified_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis"
      },
      created_date : "2018-04-07 16:27:03",
      modified_timestamp : "2018-04-07 16:27:03"
    }
  ]]
}



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload : PAYLOAD,
      fullPayload : FULL_PAYLOAD
    };
    this.filterArticles = this.filterArticles.bind(this);
    this.getPage = this.filterArticles.bind(this);
  }

  componentDidMount() {
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const filter = params.get("filter");
    this.setState({ 
      currentPage : this.props.match.path
    })
    console.log(params);
    console.log(filter);
    console.log(this.props);
  }

  UNSAFE_componentWillUpdate(nextProps, nextState){
    console.log(nextProps);
  }

  filterArticles(){
  }



  render() {
    const articles = (this.props.match.path === "/") ? <Articles articles= { this.state.payload } allArticles = { this.state.fullPayload } /> : null;
    const post = (this.props.match.path === "/post/:id") ? <div>test</div> : null;
    return (
      <div>
        <Header />
        {articles}
        {post}
        <Footer />
      </div>
    );
  }
}

export default App;
