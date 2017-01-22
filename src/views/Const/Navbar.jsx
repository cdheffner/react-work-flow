import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return(
      <div>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/api'>Test Api</Link></li>
            <li><Link to='/about'>About</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
  export default Navbar