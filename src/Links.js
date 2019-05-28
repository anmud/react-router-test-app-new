import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Links = () => {

    const isActiveFunc = (match, location) => {
     console.log(match, location)
     return match
    }


    return (
      <div>
    <nav>
      <NavLink exact activeClassName="active" to="/home">Home</NavLink>
      
      <NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink>
    
      <NavLink activeStyle={{color: 'green'}} replace to="/contact">Contact</NavLink>

      <NavLink 
      isActive={isActiveFunc}
      activeClassName="active" 
      replace to="/data">Data</NavLink>
    </nav>
     

    {/* <Link to="/?id=123">Inline</Link>
    
    <Link to={{pathname: '/', search: 'id=456'}} >Object</Link> */}

    <Link to='/page'>Some page</Link>

    <Link to='/book'>Book</Link>
    <Link to='/author'> Author</Link>

    <Link to="/menu">Menu</Link>
      </div>
    )
   
  }

  export default Links;