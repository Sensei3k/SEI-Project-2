import React from 'react'

import 'bulma'

import SquadCard from './SquadCard'

class Squads extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      squadsData: [],
      classLoaded: false,
      id: props.location.state.id,
      squadName: null,
      founded: null

    }

  }

  componentDidMount() {
    fetch(`https://api.football-data.org/v2/teams/${this.state.id}`, {
      method: 'GET', //get request
      headers: {
        'X-Auth-Token': '4c4008915f684e03bb77b3e11617f599'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ squadsData: data.squad, squadName: data.name, founded: data.founded }))
      .then(this.setState({ classLoaded: true }))


  }



  render() {
    return (

      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-primary">
                Primary title
              </h1>
              <h2 className="subtitle is-primary">
                Primary subtitle
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              {this.state.classLoaded && this.state.squadsData.map(player => {
                return (
                  <div key={player.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
                    <SquadCard
                      {...player}
                    />
                  </div>
                )
              }
              )}
            </div>
          </div>
        </section>
      </div>
    )

  }




}

export default Squads
