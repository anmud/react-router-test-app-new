import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Links from './Links'
import Data from './Data'
import Header from './Header'
import Content from './Content'
import Menu from './Menu'


 const App = (props) => {
  return (
    <div className="App">
    
     <Router>
       <div>
       <Links/>
       <Switch>
       <Route exact path='/home' component={Home}/>
       {/* <Route path='/about' component={Home}/> */}
       <Route path='/about' render={() => <h1>About</h1>}/>
       {/* <Route path='/about' children={({match}) => match && <h1>About</h1>}/> */}
       <Route path='/contact' render={() => <h1>Contact</h1>}/>
       <Route path='/data' component={Data}/>
       {/* <Route path='/:page?/:subpage?' render={({match}) => 
        <h1>Page: {match.params.page || "Home"} <br/>
            Subpage: {match.params.subpage}
        </h1>
        }/>
        <Route path='/:a(\d{2}-d{2}-d{4}):b(\.[a-z]+)' 
        render={({match}) => 
        <h1>paramA: {match.params.a } <br/>
            paramB: {match.params.b }
        </h1>
        }/>
         <Route path='/' render={({match, location}) => (
           <div>
             <p>root</p>
             <p>{JSON.stringify(match)}</p>
             <p>{JSON.stringify(location)}</p>
             <p>{new URLSearchParams(location.search).get('id')}</p>
           </div>
        )}/> */}
        {/* <Route render={()=> <h1>Page not found</h1>}/> */}
        {/* <Route path="/:itemid"
        render={({match}) => (
           <h1>Item : {match.params.itemid}</h1>
        )}/> */}
{/* 
        <div>
            <Header/>
            <Content/>
        </div> */}

        <Route path="/menu" component={Menu}/>

       </Switch>
       </div>
     </Router>

    </div>
  );
}

export default App;
