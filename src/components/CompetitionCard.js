import React from 'react'

const CompetitionCard = ({ name, area, id, images }) => {
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
