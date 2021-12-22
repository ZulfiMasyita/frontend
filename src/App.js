import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Destination from './components/pages/Destination';
import Contact from './components/pages/Contact';
import Beach from './components/content/Beach';
import BeachDetail from './components/content/BeachDetail';
import Mountain from './components/content/Mountain';
import MountainDetail from './components/content/MountainDetail';
import Lake from './components/content/Lake';
import LakeDetail from './components/content/LakeDetail';
import Waterfall from './components/content/Waterfall';
import WaterfallDetail from './components/content/WaterfallDetail';
import RiverStream from './components/content/RiverStream';
import RiverStreamDetail from './components/content/RiverStreamDetail';
import ParkForest from './components/content/ParkForest';
import ParkForestDetail from './components/content/ParkForestDetail';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Destination' component={Destination} />
          <Route path='/content/Beach' component={Beach} />
          <Route path='/BeachDetail' component={BeachDetail} />
          <Route path='/Contact' component={Contact} />
        </Switch>
        <Switch>
          <Route path='/content/Mountain' component={Mountain} />
          <Route path='/MountainDetail' component={MountainDetail} />
        </Switch>
        <Switch>
          <Route path='/content/Lake' component={Lake} />
          <Route path='/LakeDetail' component={LakeDetail} />
        </Switch>
        <Switch>
          <Route path='/content/Waterfall' component={Waterfall} />
          <Route path='/WaterfallDetail' component={WaterfallDetail} />
        </Switch>
        <Switch>
          <Route path='/content/RiverStream' component={RiverStream} />
          <Route path='/RiverStreamDetail' component={RiverStreamDetail} />
        </Switch>
        <Switch>
          <Route path='/content/ParkForest' component={ParkForest} />
          <Route path='/ParkForestDetail' component={ParkForestDetail} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
