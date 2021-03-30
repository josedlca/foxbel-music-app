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
                </div>
              </div>
            </div>

          </div>
          {/* video jumbotron */}

          {/* Resultados */}
          <div>
            <div>Resultados</div>
            <div>

              <div>
                <div>
                  img
                </div>
                <div>
                  <div>name song</div>
                  <div>name artist</div>
                </div>
              </div>

            </div>
          </div>
          {/* Resultados end*/}
        </div>
        {/* results side end*/}
        <div></div>
      </div>
    </main>
  );
}

export default App;
