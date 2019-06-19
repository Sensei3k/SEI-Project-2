import React from 'react'
import { Link } from 'react-router-dom'

const CompetitionCard = ({ name, area, id, code, images }) => {
  const key = images[id]

  return (
    <div className="comp-card">
      <figure>
        <img src={key} alt={name} className="comp-image"/>
      </figure>
      <div className="comp-content">
        <div className="league-area">
          <p className="title is-4">{name}</p>
          <p className="subtitle is-5">{area.name}</p>
        </div>
        <div>
          <Link to={{
            pathname: `/competitions/${code}/standings`,
            state: { code: code }
          }}>
            <p className="subtitle is-5 league-link">Standings</p>
          </Link>
          <Link to={{
            pathname: `/competitions/${code}/clubs`,
            state: {code: code}
          }}>
            <p className="subtitle is-5 league-link">Clubs</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
