import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
//links
import locationSearch from '../locationSearch/locationSearch';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {connect} from 'react-redux';



class App extends Component {



  render() {
    return (
      <>
      <div className="App"> 
        <Router>
          <nav className='navBar'>
          </nav>
          <Route exact path='/' component={ locationSearch } />
        </Router>
      </div>
      
      </>
    );
  }

}

export default connect()(withRouter(App));
