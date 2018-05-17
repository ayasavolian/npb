import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import './global.css';
import Articles from './Articles';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';

import registerServiceWorker from './registerServiceWorker';


const PAYLOAD = {
  articles : [{
      post_uuid : "123-456-789",
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p>Hey this <strong>editor</strong> rocks 😀😜</p><p><span style=\"font-size: 30px;\">This is a test</span></p><a href = \"https://www.google.com\">this is a test reference</a><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      status : "a quick read on how we're trying to help you at New Piggy Bank",
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis",
        "photo": "eddie_photo.png"
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
    post_name : "new-piggy-bank-mastering-money-for-gen-y",
    section : {
      section : "personal finance"
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
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
    post_name : "new-piggy-bank-mastering-money-for-gen-y",
    section : {
      section : "stock market investing"
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
    post_name : "new-piggy-bank-mastering-money-for-gen-y",
    section : {
      section : "personal finance"
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
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
    post_name : "new-piggy-bank-mastering-money-for-gen-y",
    section : {
      section : "stock market investing"
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
    body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_uuid : "123-456-789",
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p>Hey this <strong>editor</strong> rocks 😀😜</p><p><span style=\"font-size: 30px;\">This is a test</span></p><a href = \"https://www.google.com\">this is a test reference</a><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
      read_time : 10,
      upvotes : 274,
      status : "a quick read on how we're trying to help you at New Piggy Bank",
      created_by : {
        "user_uuid": "81822920",
        "email": "edward@newpiggybank.com",
        "first": "Edward",
        "last": "Gorbis",
        "photo": "eddie_photo.png"
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "stock market investing"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "stock market investing"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "stock market investing"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
      section : {
        section : "personal finance"
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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
      post_name : "new-piggy-bank-mastering-money-for-gen-y",
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
      body : "<p><span style=\"font-size: 30px;\">This is a test</span></p><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <strong>Bolded text. </strong></p><p><strong>Referencing an image. </strong></p><img src=\"https://thumbs.dreamstime.com/b/green-piggy-bank-sea-gold-money-15196898.jpg\" alt=\"undefined\"><p>This is another test.</p>",
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

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payload : PAYLOAD,
      fullPayload : FULL_PAYLOAD,
      articlesForUse : PAYLOAD,
      fullArticlesForUse : FULL_PAYLOAD,
    };
    this.filterArticles = this.filterArticles.bind(this);
    this.getPage = this.filterArticles.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
  }

  filterOptions(filter){
    var filterToUpdate = ""
    if (filter === "finance")
      filterToUpdate = "personal finance";
    else if (filter === "crypto")
      filterToUpdate = "crypto currency investing";
    else if (filter === "stock")
      filterToUpdate = "stock market investing";
    return filterToUpdate;
  }

  componentDidMount() {
    var csrftoken = readCookie('csrftoken');
    fetch(window.location.origin + "/api/user/session", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-CSRFToken": csrftoken
      },
      credentials: 'same-origin',
      body: JSON.stringify({})
    })
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const filter = params.get("filter");
    const filterToUpdate = this.filterOptions(filter);
    this.setState({ 
      currentFilter : filterToUpdate
    })
    if (filterToUpdate !== "")
      this.filterArticles(filterToUpdate);
  }

  componentWillReceiveProps(nextProps){
    const search = nextProps.location.search; // could be '?foo=bar';
    const params = new URLSearchParams(search);
    const paramFilter = params.get("filter");
    var filterToUpdate = this.filterOptions(paramFilter);
    if (filterToUpdate === ""){
      var payload = Object.assign({}, this.state.payload);
      var fullPayload = Object.assign({}, this.state.fullPayload);
      this.setState({ 
        articlesForUse : payload,
        fullArticlesForUse : fullPayload,
        currentFilter : filterToUpdate
      })
    }
    else if (this.state.currentFilter !== filterToUpdate){
      this.setState({ 
        currentFilter : filterToUpdate
      })
      this.filterArticles(filterToUpdate)
    }
  }

  filterArticles(updatedFilter){
    // filter down the articles that already exist to the ones we want to filter sectin on
    var previousPayload = Object.assign({}, this.state.payload);
    var previousFullPayload = Object.assign({}, this.state.fullPayload);
    var updatedArticles = this.state.payload.articles.filter((article) => {
      return article.section.section === updatedFilter
    });
    // next we'll have to iterate through the nested array of all articles to just put them
    // all in a list. We'll want to use standard for loops to be standard across all browsers.
    // if the updatedArticles doesn't have 5 items we'll want to make sure it gets there first,
    // the rest of the items will be setup for pagination
    var allFullArticles = [];
    for (let x = 0; x < previousFullPayload.articles.length; x++){
      for (let y = 0; y < previousFullPayload.articles[x].length; y++){
        if (previousFullPayload.articles[x][y].section.section === updatedFilter){
          if (updatedArticles.length !== 5)
            updatedArticles.push(previousFullPayload.articles[x][y]);
          else
            allFullArticles.push(previousFullPayload.articles[x][y]);
        }
      }
    }
    // now that we have our full list we'll get pagination done on the rest of the articles
    var paginatedFullArticles = [];
    paginatedFullArticles[0] = [];
    for (let x = 0; x < allFullArticles.length; x++){
      let paginatedValue = 10;
      let currentPagination = 0;
      if (!(x % paginatedValue) && x){
        currentPagination += 1;
        paginatedFullArticles[currentPagination] = [];
      }
      paginatedFullArticles[currentPagination].push(allFullArticles[x]);
    }
    // copy over the existing payloads that are for use from state
    var updatedArticlesForUse = Object.assign({}, this.state.articlesForUse);
    var updatedFullArticlesForUse = Object.assign({}, this.state.fullArticlesForUse);
    // update the copied over payloads with the new articles that should be filtered on
    updatedArticlesForUse.articles = updatedArticles;
    updatedFullArticlesForUse.articles = paginatedFullArticles;
    // set them on the state now 
    this.setState({
      articlesForUse: updatedArticlesForUse,
      fullArticlesForUse: updatedFullArticlesForUse
    })
  }

  render() {
    const articles = (this.props.match.path === "/") ? <Articles articles= { this.state.articlesForUse } allArticles = { this.state.fullArticlesForUse } filter = {this.state.currentFilter} /> : null;
    const post = (this.props.match.path === "/post/:id") ? <Post articles = { this.state.fullPayload } articleId = {this.props.match} /> : null;
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
