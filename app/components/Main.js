import React, {Component} from 'react'
import Navbar from 'Navbar'

 const Main = (props) => {
    return (
      <div>
        <Navbar />
        <h2>Main Component</h2>
        {props.children}
      </div>
    )
}
export default Main
