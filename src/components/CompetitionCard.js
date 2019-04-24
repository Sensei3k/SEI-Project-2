import React from 'react'
import { Link } from 'react-router-dom'

const CompetitionCard = ({ name, area, id, code, images }) => {
  const key = images[id]

  return (

    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={key} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className = "media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{area.name}</p>
            <hr/>
            <Link to={{
              pathname: `/competitions/${code}/standings`,
              state: { code: code }
            }}>
              <p className="subtitle is-6">Standings</p>
            </Link>
            <Link to={{
              pathname: `/competitions/${code}/clubs`,
              state: {code: code}
            }}>
              <p className="subtitle is-6">Clubs</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
