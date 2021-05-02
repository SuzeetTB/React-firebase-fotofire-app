import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './comps/MainComponent';
import E404 from './comps/404'
import './themes/switcher.scss';
import cors from 'cors';

function App() {
  return (
    <MainComponent/>

    
  );
}

export default App;

/* <Router basename="/App">
      <Switch>
          <Route path='/' exact component ={MainComponent}/>
          <Route path='*' component={E404}/>
      </Switch>
    </Router> */