import React from 'react'

//import CompetitionCard from './CompetitionCard'
import 'bulma'

import CompetitionCard from './CompetitionCard'

class Competitions extends React.Component {
  constructor() {
    super()

    this.state = {
      footballData: [],
      classLoaded: false,
      //array of id's for the 7 leagues we are interested in and their corresponding images (not given with API)
      sevenComps: [2021, 2002, 2019, 2014, 2017, 2003, 2015],
      sevenCompsImages: {
        2021: '../images/premier_league-logo.jpg',
        2002: '../images/bundesliga_logo_.jpg',
        2019: '../images/serie_a.jpg',
        2014: '../images/logo-laliga_280.jpg',
        2017: '../images/primeira-liga-logo.jpg',
        2003: '../images/eredivisie-logo-football.jpg',
        2015: '../images/ligue_1.jpg'
      }
    }

  }

  componentDidMount() {
    fetch('http://api.football-data.org/v2/competitions/', {
      method: 'GET', //get request
      headers: {
        'X-Auth-Token': '4c4008915f684e03bb77b3e11617f599'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ footballData: data.competitions }))
      .then(() => this.setState({ classLoaded: true }))
  }


  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.classLoaded && this.state.footballData.map(competition => {
              if (this.state.sevenComps.includes(competition.id)) {
                return (
                  <div key={competition.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
                    <CompetitionCard
                      {...competition} images={this.state.sevenCompsImages}
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
