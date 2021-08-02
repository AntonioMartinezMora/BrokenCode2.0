import React, {useEffect, useState} from 'react';
import { useGlobalContext } from './context';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './style/app.css'; 
// Import Pages
import SingleProject from './pages/SingleProject';
import Error from './pages/Error';
import Home from './pages/Home';

function App() {
  const {categories, filterItems, projectsList} = useGlobalContext()

  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/project/:id">
          <SingleProject />
        </Route>
        <Route path="*" >
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  ) 
} 

export default App;
