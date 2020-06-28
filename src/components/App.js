import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import React, { Component } from 'react';
import Home from './Home'
import About from './About'
// import Navbar from './Navbar'
import ParkingList from './ParkingList'
import ParkingDetail from './ParkingDetail'
import NotFound from './NotFound'


import "../App.css"

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <div className="App-header">
            {/* Render {Home} component based on 'path' and 'component' properties */}
            {/* 'exact' means match the path exactly, cause by default it matches all that starts with it */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route exact path="/parking" component={ParkingList} />
              <Route path="/parking/:plateNumber" component={ParkingDetail} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
