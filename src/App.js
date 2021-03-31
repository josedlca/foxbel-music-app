import React,{useState} from 'react'
import LeftSide from './components/LeftSide'
import Search from './components/Search'
import Jumbotron from './components/Jumbotron'
import CardsPart from './components/CardsPart'
import './scss/App.sass'

const DZPLAYER = window.DZ
DZPLAYER.init({
  appId  : '8',
  channelUrl : 'http://developers.deezer.com/examples/channel.php',
  player : {
  	onload: function(response) {
			console.log('DZ.player is ready', response);
		}
  }
});

function App() {
  const [playing, setPlaying] = useState(false)
  const [volume, setMiVolume] = useState(50)
  const [searchData, setSeacrhData] = useState([])
  const [smallInfo, setSmallInfo] = useState([])

  const fetchMusic = (value) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${value}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
      }
    )
    .then((response)=>{
      return response.json()
    })
    .then((recurso) => {
      setSeacrhData(recurso.data)
    }) 
  }

  const playMusic = (idTrack,smallInfo) =>{
      DZPLAYER.player.playTracks([idTrack]) ;
      setPlaying(!playing);
      setSmallInfo(smallInfo)
      return false;
  }
  console.log(smallInfo)

  return (
    <main className="App">
      <div className="container">
        <LeftSide/> 
        <div className="results">  
          <Search fetchMusicData={fetchMusic}/>
          {
            searchData.length === 0 ?
            <h2>Realiza una Buzqueda</h2>:
            <>
              <Jumbotron 
                  firstData={
                      {data: searchData[0],
                      playMusicPass: playMusic}
                  } />
              <CardsPart 
                  secondData={
                    {data: searchData,
                    playMusicPass: playMusic}
                } 
              />
            </>
          }
        </div>
        {/* play bar */}
        <div className="play">
          {
            smallInfo.length === 0?
            <div className="play--desc">
              <div className="play--desc__image">
                <img src="https://via.placeholder.com/150" alt="smallThumbnail"/>
              </div>
              <div className="play--desc__info">
                <div >Cancion</div>
                <div>Artista - Album</div>
              </div>
            </div>:
            <div className="play--desc">
              <div className="play--desc__image">
                <img src={smallInfo[2]} alt="smallThumbnail"/>
              </div>
              <div className="play--desc__info">
                <div >{smallInfo[0]}</div>
                <div>{smallInfo[1]}</div>
              </div>
            </div>
          }
          
          <div className="play--controls">
            <div 
              className="play--controls__previous"
              onClick={()=>{DZPLAYER.player.prev(); return false;}}
              value= "prev"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z"/>
              </svg>
            </div>
            {playing === true?
              <div 
                className="play--controls__current"
                onClick={()=> {DZPLAYER.player.pause();setPlaying(!playing); return false;}} 
                value="pause"
              >
                <i className="fas fa-pause"></i>
              </div>:
              <div 
                className="play--controls__current"
                onClick={()=> {DZPLAYER.player.play();setPlaying(!playing); return false;}} 
                value="play"
              >
                <i className="fas fa-play"></i>
              </div>
            }
            <div 
              className="play--controls__next"
              onClick={()=>{DZPLAYER.player.next(); return false;}}
              value= "next"
            >
              <svg viewBox="0 0 24 24">
                <path d="M19 12l-18 12v-24l18 12zm4-11h-4v22h4v-22z"/>
              </svg>
            </div>
          </div>

          <div className="play--volume">
            <div className="play--volume__range">
              <input 
                type="range"
                id="typeinp"  
                min="0" max="100" 
                value= {volume} 
                onChange={(e)=>{DZPLAYER.player.setVolume(volume);setMiVolume(e.target.value) ;return false;}}
                step="1"
              />
            </div>
            {
              volume>0 ?
              <div 
                className="play--volume__icon"
                onClick={() => {DZPLAYER.player.setVolume(0);setMiVolume(0); return false;}}
              >
                <i className="fas fa-volume-up"></i>
              </div>:
              <div 
                className="play--volume__icon"
                onClick={() => {DZPLAYER.player.setVolume(50);setMiVolume(50); return false;}}
              >
              <i className="fas fa-volume-off"></i>
            </div>
            }
          </div>

        </div>
        {/* play bar */}
      </div>
    </main>
  );
}

export default App;
