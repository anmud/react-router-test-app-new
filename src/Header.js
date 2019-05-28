import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'

 const Header = ({match}) => {


  return (
    <div className="header">
    <Route
    path="/:page"
    render={({match}) => (
        <h1>{match.params.page} header</h1>
    )}
    />

   
    </div>
  );
}

export default Header;