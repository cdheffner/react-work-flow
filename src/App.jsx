import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, Router, browserHistory, IndexRoute } from 'react-router'
import Navbar from 'Const/Navbar'
import Footer from 'Const/Footer'
import Home from './views/Home'
import API from './views/API'
import About from './views/About'


function App({ children }) {
  return (
    <div class='App'>
      <Navbar />
      {children}
      <Footer/>
    </div>
  )
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='/api' component={API}/>
    <Route path='/about' component={About}/>
    {/*
      <IndexRoute component={...}/>
      <Route path='/...' component={...}/>
    */}
    </Route>
  </Router>,
  document.getElementById('root')
)