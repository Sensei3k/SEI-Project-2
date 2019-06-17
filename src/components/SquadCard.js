import React from 'react'

const SquadCard = ({ name, nationality, shirtNumber, position }) => {

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src='../images/default-headshot.png' alt={null} />
        </figure>
      </div>
      <div className="card-content">
        <div className = "media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">Number: {shirtNumber}</p>
            <p className="subtitle is-6">Position: {position}</p>
            <p className="subtitle is-6">Nationality: {nationality}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SquadCard
