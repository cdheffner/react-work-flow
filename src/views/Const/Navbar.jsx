import React from 'react'
import { Link } from 'react-router'

export default class Navbar extends React.Component{
  render() {
    return(
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/b'>Test Api</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}