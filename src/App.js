import React from 'react'
import './App.css'

function App() {
  return (
    <main className="App">
      <div>
        {/* left side */}
        <div>

          <div>
            <h1>Title</h1>
          </div>          

          <div>
            <h3>Mi Libreria</h3>
            <ul>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
              <li>one</li>
            </ul>
          </div>

        </div>
        {/* left side end*/}

        {/* results side*/}
        <div>
          <div>

            {/* search side */}            
            <div>
              <div>
                <input type="text"/>
                <div>Buscar</div>
              </div>

              <div>
                <div>Logo</div>
                <div>Usuario</div>
              </div>
            </div>
            {/* search side */}

            {/* video jumbotron */}
            <div>
              <div>
                <div>VIDEO</div>
              </div>
              <div>
                <div>Name artist</div>
                <div>
                  <div>Lo mejor de adele</div>
                  <div>seguidores</div>
                </div>
                <div>
                  <button>Reproducir</button>
                  <button>Seguir</button>
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
        </div>
        {/* results side end*/}
        <div></div>
      </div>
    </main>
  );
}

export default App;
