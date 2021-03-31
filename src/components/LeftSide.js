import React from 'react'

const LeftSide = ()=>{
    return(
        <div className="leftSide">
          <div className="leftSide--image">
            <div className="leftSide--image__container">
              <img src="/assets/img/foxbel-music@3x.png" alt="brandName"/>
            </div>
          </div>          
      
          <div className="leftSide--lists">
            <h3>Mi Libreria</h3>
            <ul>
              <li>Recientes</li>
              <li>Artistas</li>
              <li>Albums</li>
              <li>Canciones</li>
              <li>Estaciones</li>
            </ul>
          </div>
          <div className="leftSide--lists">
            <h3>Playlist</h3>
            <ul>
              <li>Metal</li>
              <li>Para bailar</li>
              <li>Rock 90s</li>
              <li>Baladas</li>
            </ul>
          </div>
        </div>
    )
}

export default LeftSide