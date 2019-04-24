import React from 'react'
//import { Link } from 'react-router-dom'

const ClubCard = ({ name, crestUrl }) => {
  //const key = images[id]

  return (

    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
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
