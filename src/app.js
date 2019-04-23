import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Competitions from './components/Competitions'
import LeagueTable from './components/LeagueTable'
import About from './components/About'
import Navbar from './components/Navbar'
//import Welcome from './components/Welcome'

import './style.scss'

console.log('JS loaded')

//Football Data App -
// General:
// Welcome page - onClick link to home page - first completing it without this - add later
// Home - 'start' page, click button to bring you to page
//
// About page - optional

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          {/* put welcome page here*/}
          <Navbar />
          {/* put navbar here */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/competitions/:code" component={LeagueTable} />
            <Route path="/competitions" component={Competitions} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
      </Router>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
