import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import App from './App';
import Header from './Header';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

class Home extends Component {
  componentDidMount(){
    const search = this.props.location.search; // could be '?foo=bar'
    const params = new URLSearchParams(search);
    const foo = params.get('test'); // bar
    console.log(foo);
  }

    render(){
        return (
          <div>
          <Header />
          </div>
        );
    }
}

const BasicExample = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
      <Switch>
        <Route exact path="/post/:id" component={App} />
      </Switch>
    </div>
  </Router>
);

registerServiceWorker();
ReactDOM.render(<BasicExample />, document.getElementById('root'));