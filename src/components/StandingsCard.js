import React from 'react'
// import { Link } from 'react-router-dom'

const StandingsCard = ({ team, position, playedGames, won, draw, lost, goalsFor, goalsAgainst, goalDifference, points }) => {

  return (
    <div key={team.id} className="column is-multiline is-one-quarter-desktop is-one-third-tablet">
      <table className="table">
        <tbody>
          <tr>
            <th>{position}</th>

            <td><img src={team.crestUrl || '../images/default-crest.png'} alt={team.name} className="image is-64x64" /> <strong>{team.name}</strong></td>

            <td>{playedGames}</td>
            <td>{won}</td>
            <td>{draw}</td>
            <td>{lost}</td>
            <td>{goalsFor}</td>
            <td>{goalsAgainst}</td>
            <td>{goalDifference}</td>
            <td>{points}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StandingsCard
