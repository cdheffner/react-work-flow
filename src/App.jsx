import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, Router, browserHistory, IndexRoute } from 'react-router'
import Navbar from 'Const/Navbar'
import Footer from 'Const/Footer'
import ViewA from './views/ViewA'
import ViewB from './views/ViewB'


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
    <IndexRoute component={ViewA}/>
    <Route path='/b' component={ViewB}/>
    {/*
      <IndexRoute component={...}/>
      <Route path='/...' component={...}/>
    */}
    </Route>
  </Router>,
  document.getElementById('root')
)