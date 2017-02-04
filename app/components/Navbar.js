import React, {Component} from 'react'
import {Link, IndexLink} from 'react-router'

 const Navbar = () => {
    return (
      <div>
        <h2>Navbar Component</h2>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Get Weather</IndexLink>
        <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >About</Link>
        <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Example</Link>
      </div>
    )
}
export default Navbar
