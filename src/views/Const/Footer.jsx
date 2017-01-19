import React from 'react'
import { Link } from 'react-router'

export default class Footer extends React.Component{
  render() {
    return(
      <div>
        <nav>
          <ul>
            <li><Link to='https://github.com/joshcode16'>Joshua</Link></li>
            <li><Link to='https://github.com/cdheffner'>Daniel</Link></li>
            <li><Link to='https://github.com/colshacol'>Colton</Link></li>
            <li><Link to='https://github.com/denzuko'>Spencer</Link></li>
          </ul>
        </nav>
      </div>
    )
  }
}