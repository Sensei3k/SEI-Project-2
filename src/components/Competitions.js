import React from 'react'
import 'bulma'

import CompetitionCard from './CompetitionCard'

class Competitions extends React.Component {
  constructor() {
    super()

    this.state = {
      footballData: [],
      classLoaded: false
    }

    //array of id's for the 5 leagues we are interested in and their corresponding images (not given with API, had to be hard-coded)
    this.competitions = {
      sevenComps: [2021, 2002, 2019, 2014, 2015],
      sevenCompsImages: {
        2021: '../images/premier_league-logo.jpg',
        2002: '../images/bundesliga_logo_.jpg',
        2019: '../images/serie_a.jpg',
        2014: '../images/logo-laliga_280.jpg',
        2015: '../images/ligue_1.jpg'
      }
    }
  }

  componentDidMount() {
    fetch('https://api.football-data.org/v2/competitions/', {
      method: 'GET',
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_TOKEN
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ footballData: data.competitions }))
      .then(() => this.setState({ classLoaded: true }))
      .catch(err => console.log(err))
  }


  render() {
    const classes = 'column is-multiline is-one-quarter-desktop is-one-third-tablet'
    return (
      <section className="section background-style">
        <div className="container">
          <div className="rows is-multiline comp-center">
            {this.state.classLoaded && this.state.footballData.map(competition => {
              if(this.competitions.sevenComps.includes(competition.id)) {
                return (
                  <div key={competition.id} className={classes}>
                    <CompetitionCard
                      {...competition} images={this.competitions.sevenCompsImages}
                    />
                  </div>
                )
              }
            }
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Competitions
