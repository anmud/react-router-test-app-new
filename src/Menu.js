import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Food from './Food'

 const Menu = ({match}) => {


  return (
    <div className="content">
        <h1>Menu</h1>

    <Link to="/menu/food">Food</Link>
    <Link to="/menu/drinks">Drinks</Link>
    <Link to="/menu/sides">Sides</Link>

    <Route
    path="/menu/:section"
    render={({match}) => (
        <h2>{match.params.section} </h2>
    )}
    />

   
    </div>
  );
}

export default Menu;