import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link to='/' className="navbar-item navbar-brand">Home</Link>
        <Link to='/competitions' className="navbar-item navbar-brand">Competitions</Link>
        <div className="navbar-end">
          <a className="navbar-item"><span className="icon">⚽️</span></a>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
