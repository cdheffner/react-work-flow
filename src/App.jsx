import React from 'react'
import ReactDOM from 'react-dom'
import { Link, Route, Router, browserHistory, IndexRoute } from 'react-router'

function App({ children }) {
  const a = 10
  return (
    <div class='App'>
      {children}
    </div>
  )
}

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    {/*
      <IndexRoute component={...}/>
      <Route path='/...' component={...}/>
    */}
    </Route>
  </Router>,
  document.getElementById('root')
)