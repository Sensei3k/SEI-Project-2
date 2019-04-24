import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Competitions from './components/Competitions'
import LeagueTable from './components/LeagueTable'
import Navbar from './components/Navbar'
import Clubs from './components/Clubs'
import Squads from './components/Squads'

import './style.scss'

//Football Data App -

class App extends React.Component {
  render() {
    return (
      <Router>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/competitions/:code/standings" component={LeagueTable} />
            <Route path="/competitions/:code/clubs/:shortName" component={Squads} />
            <Route path="/competitions/:code/clubs" component={Clubs} />
            <Route path="/competitions" component={Competitions} />
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
