import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

// css
import './App.css';
import './assets/css/styles.css';
import './assets/css/icon.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// js
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// fontAwesome
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faCheckSquare, faCoffee, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';



// components
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import BusinessList from './components/BusinessList/BusinessList';
import Business from './components/Business/Business';


// library.add(fab,);



function App() {
  return (
    <Router>
      <Switch>
        <Route exact={true} path="/"
          render={() => (
            <Layout>
              <Home />
            </Layout>
          )}
        />
        <Route path="/BusinessList"
          render={() => (
            <Layout>
              <BusinessList />
            </Layout>
          )}
        />
        <Route path="/Business"
          render={() => (
            <Layout>
              <Business />
            </Layout>
          )}
        />
      </Switch>
    </Router>
    // <Router> 
    //   <Route path="/" component={Home} exact={true} />
    //   <Route path="/BusinessList" component={BusinessList} />
    // </Router>
  );
}

export default App;
