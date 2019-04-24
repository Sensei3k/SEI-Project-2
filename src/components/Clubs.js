import React from 'react'
import { Link } from 'react-router-dom'
import 'bulma'

import ClubCard from './ClubCard'

class Clubs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      clubsData: [],
      classLoaded: false
    }

  }

  componentDidMount() {
    fetch(`http://api.football-data.org/v2/competitions/${this.props.match.params.code}/teams?2019`, {
      method: 'GET', //get request
      headers: {
        'X-Auth-Token': '4c4008915f684e03bb77b3e11617f599'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ clubsData: data.teams }))
      .then(this.setState({ classLoaded: true }))
  }



  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.state.classLoaded && this.state.clubsData.map(club => {
              return (
                <div key={club.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
                  <Link to={{
                    pathname: `/competitions/${this.props.match.params.code}/clubs/${club.shortName}`,
                    state: { id: club.id }
                  }}>
                    <ClubCard
                      {...club}
                    />
                  </Link>
                </div>
              )
            }
            )}
          </div>
        </div>
      </section>

    )

  }




}

export default Clubs
