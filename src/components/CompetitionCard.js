import React from 'react'

const CompetitionCard = ({ name, image, origin}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className = "content">
          <p>{origin}</p>
        </div>
      </div>
    </div>
  )
}

export default CompetitionCard
