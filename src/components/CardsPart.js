import React from 'react'

const CardsPart = ({secondData}) =>{
    return(
        <div className="results--cards">
            <div className="results--cards__title">Resultados</div>
            <div className="results--cards__container">
                {
                    secondData.data.map( (item, index) => 
                    <div key={index} className="results--cards__container-body">
                        <div 
                            className="results--cards__container-body_image"
                            onClick={()=>secondData.playMusicPass(item.id, [item.title, item.artist.name,item.album.cover_medium])}
                        >
                            <img src={item.album.cover_medium} alt="card-img"/>
                            <span className="results--cards__container-body_image-dots"><i className="fas fa-ellipsis-v"></i></span>
                            <span className="results--cards__container-body_image-play"><i className="fas fa-play"></i></span>                  
                        </div>
                        <div className="results--cards__container-body_info">
                            <h3>{item.title}</h3>
                            <h4>{item.artist.name}</h4>
                        </div>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default CardsPart