import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to='/' className="navbar-item">Home</Link>
        <Link to='/competitions' className="navbar-item">Competitions</Link>
      </div>
    )
  }
}

export default withRouter(Navbar)
