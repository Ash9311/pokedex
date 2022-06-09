import React from "react";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import "./Pokedex.css"

const Pokedex = () =>{
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <p>list of pokemon</p>
                </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult></PokeSearchResult>
            </div>
        </div>
    )
}

export default Pokedex;