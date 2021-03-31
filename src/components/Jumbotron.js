import React from 'react'

const Jumbotron = ({firstData}) =>{
    return(

        <div className="results--jumbotron">

            <div className="results--jumbotron__behind" 
                style={{background: `linear-gradient(rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)),url(${firstData.data.artist.picture_big})`}}>
            </div>

            <div className="results--jumbotron__container">
                <div 
                    className="results--jumbotron__container-thumbnail"
                    onClick={()=>firstData.playMusicPass(firstData.data.id, [firstData.data.title, firstData.data.artist.name,firstData.data.album.cover_medium])}
                >
                    <span className="results--cards__container-body_image-play"><i className="fas fa-play"></i></span>  
                    <img src={firstData.data.album.cover_medium} alt={firstData.data.artist.name}/>
                </div>

                <div className="results--jumbotron__container-info">
                    <h4>{firstData.data.artist.name}</h4>
                    <div className="results--jumbotron__container-info_desc">
                        <h5>{`Lo mejor de ${firstData.data.artist.name}`}</h5>
                        <span>321,123 seguidores</span>
                    </div>
                    <div className="results--jumbotron__container-info_bio">
                        <p>{`${firstData.data.artist.name} Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como Adele, es una cantante, compositora y multinstrumentista británica.8​`} </p>
                    </div>
                    <div className="results--jumbotron__container-info_btn">
                        <button
                            onClick={()=>firstData.playMusicPass(firstData.data.album.id, [firstData.data.title, firstData.data.artist.name,firstData.data.album.cover_medium])}
                        >
                            Reproducir
                        </button>
                        <button>Seguir</button>
                        <span><i className="fas fa-ellipsis-h"></i></span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Jumbotron