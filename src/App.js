import React from 'react'
import './scss/App.sass'

function App() {
  return (
    <main className="App">
      <div className="container">
        {/* left side */}
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

        </div>
        {/* left side end*/}

        {/* results side*/}
        <div className="results">
          {/* search side */}            
          <div className="results--search">
            <div className="results--search__inp">
              <input type="text" placeholder="Buscar"/>
              <div className="results--search__inp-icon">
                <i className="fas fa-search"></i>
              </div>
            </div>

            <div className="results--search__user">
              <div className="results--search__user-icon">
                <i className="fas fa-user"></i>
              </div>
              <h4>User</h4>
            </div>
          </div>
          {/* search side */}

          {/* video jumbotron */}
          <div className="results--jumbotron">

            <div className="results--jumbotron__behind" 
              style={{background: "linear-gradient(rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)),url(assets/img/adele-fit.jpg)"}}>
            </div>

            <div className="results--jumbotron__container">
              <div className="results--jumbotron__container-thumbnail">
                <img src="/assets/img/adele.jpg" alt="artist"/>
              </div>

              <div className="results--jumbotron__container-info">
                <h4>Adele 21</h4>
                <div className="results--jumbotron__container-info_desc">
                  <h5>Lo mejor de adele</h5>
                  <span>321,123 seguidores</span>
                </div>
                <div className="results--jumbotron__container-info_bio">
                  <p>Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​ </p>
                </div>
                <div className="results--jumbotron__container-info_btn">
                  <button>Reproducir</button>
                  <button>Seguir</button>
                  <span><i className="fas fa-ellipsis-h"></i></span>
                </div>
              </div>
            </div>

          </div>
          {/* video jumbotron */}

          {/* cards */}
          <div className="results--cards">
            <div className="results--cards__title">Resultados</div>
            <div className="results--cards__container">

              <div className="results--cards__container-body">
                <div className="results--cards__container-body_image">
                  <img src="/assets/img/adele.jpg" alt="card-img"/>
                  <span className="results--cards__container-body_image-dots"><i className="fas fa-ellipsis-v"></i></span>
                  <span className="results--cards__container-body_image-play"><i className="fas fa-play"></i></span>                  
                </div>
                <div className="results--cards__container-body_info">
                  <h3>21</h3>
                  <h4>Adele</h4>
                </div>
              </div>
              
            </div>
          </div>
          {/* cards end*/}
        </div>
        {/* results side end*/}

        {/* play bar */}
        <div className="play">

          <div className="play--desc">
            <div className="play--desc__image">
              <img src="/assets/img/adele.jpg" alt="smallThumbnail"/>
            </div>
            <div className="play--desc__info">
              <div >Cancion</div>
              <div>Artista - Album</div>
            </div>
          </div>

          <div className="play--controls">
            <div className="play--controls__previous">
              <svg viewBox="0 0 24 24">
                <path d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z"/>
              </svg>
            </div>
            <div className="play--controls__current">
              <i className="fas fa-play"></i>
            </div>
            <div className="play--controls__next">
              <svg viewBox="0 0 24 24">
                <path d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z"/>
              </svg>
            </div>
          </div>

          <div className="play--volume">
            <div className="play--volume__range">
              <input type="range"/>
            </div>
            <div className="play--volume__icon">
              <i className="fas fa-volume-off"></i>
            </div>
          </div>

        </div>
        {/* play bar */}
      </div>
    </main>
  );
}

export default App;
