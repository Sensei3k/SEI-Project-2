import React from 'react'
import StandingsCard from './StandingsCard'
import {Link} from 'react-router-dom'

class Standings extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      classLoaded: false,
      leagueData: [],
      code: props.location.state.code
    }
  }

  componentDidMount() {
    fetch(`https://api.football-data.org/v2/competitions/${this.state.code}/standings`, {
      method: 'GET',
      headers: {
        'X-Auth-Token': process.env.FOOTBALL_TOKEN
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ leagueData: data }))
      .then(() => this.setState({ classLoaded: true }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section className="section background-style">
        <div className="container table-bg animated bounceInRight">
          <table className="table">
            <thead>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th className="team-header">Team</th>
                <th><abbr title="Played">Pld</abbr></th>
                <th><abbr title="Won">W</abbr></th>
                <th><abbr title="Drawn">D</abbr></th>
                <th><abbr title="Lost">L</abbr></th>
                <th><abbr title="Goals for">GF</abbr></th>
                <th><abbr title="Goals against">GA</abbr></th>
                <th><abbr title="Goal difference">GD</abbr></th>
                <th><abbr title="Points">Pts</abbr></th>
              </tr>
            </thead>
          </table>
          {this.state.classLoaded && this.state.leagueData.standings[0].table.map(club => {
            return(
              <div key={club.position}>
                <Link to={{
                  pathname: `/competitions/${this.props.match.params.code}/clubs/${club.team.id}`,
                  state: { id: club.id }
                }}>
                  <StandingsCard
                    {...club}
                  />
                </Link>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Standings
