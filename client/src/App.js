import React from 'react';
//import logo from './logo.svg';
import './App.css';
//import Meters from './components/meters/meters';
import Linecharts from './components/meters/meters'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
function App() {
  return (
    <div className="App">
 <Router>  
      <div>  
          <div class="row" className="hdr">  
            <div class="col-sm-12 btn btn-warning">  
              RMS Charts
          </div>  
          </div>  
          <div class="row"> 
           <div class="col-sm-1">  
            </div>  
            <div class="col-sm-2">  
              <Link to={'/Linecharts'} className="nav-link btn btn-info">Line Chart</Link>  
            </div>  
            <div class="col-sm-1">  
            </div>  
          </div>  
        </div>  
        <div className="container">  
          <Switch>  
          <Route path='/Linecharts' component={Linecharts} />  
          </Switch>  
        </div>  
      </Router>  
    </div>
  );
}

export default App;
