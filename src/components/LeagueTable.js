import React from 'react'


class LeagueTable extends React.Component {
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
      method: 'GET', //get request
      headers: {
        'X-Auth-Token': '4c4008915f684e03bb77b3e11617f599'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({ leagueData: data }))
      .then(() => this.setState({ classLoaded: true }))
  }

  render() {
    console.log(this.state.code)
    console.log()

    //refactor the below into its own component - ex. 'LeagueTableDisplay'
    return (
      <section className="section">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th><abbr title="Position">Pos</abbr></th>
                <th>Team</th>
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

            return (
              <div key={club.team.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
                <table className="table">
                  <tbody>
                    <tr>
                      <th>{club.position}</th>

                      <td><img src={club.team.crestUrl} alt={club.team.name} className="image is-64x64" /> <strong>{club.team.name}</strong></td>

                      <td>{club.playedGames}</td>
                      <td>{club.won}</td>
                      <td>{club.draw}</td>
                      <td>{club.lost}</td>
                      <td>{club.goalsFor}</td>
                      <td>{club.goalsAgainst}</td>
                      <td>{club.goalDifference}</td>
                      <td>{club.points}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          }

          )}

        </div>

      </section>
    )
  }

}

export default LeagueTable
