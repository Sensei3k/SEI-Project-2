import React from 'react'

const ClubCard = ({ name, crestUrl }) => {
  return (
    <div className="box box-hover">
      <article className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={crestUrl} alt={name} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong>
              <br/>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ClubCard
