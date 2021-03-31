import React  from 'react'
import { useInput } from '../hooks/input-hook';
const Search =(props)=>{
    const {value, bind, reset} = useInput('')

    return(    
        <div className="results--search">
            <div className="results--search__inp">
                <input type="text" {...bind} placeholder="Buscar"/>
                <div 
                className="results--search__inp-icon"
                onClick ={()=>props.fetchMusicData(value)}
                >
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
    )
}

export default Search