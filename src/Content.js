import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

 const Content = ({match}) => {


  return (
    <div className="content">
    <Route
    path="/:page"
    render={({match}) => (
        <p>{match.params.page} content</p>
    )}
    />

   
    </div>
  );
}

export default Content;