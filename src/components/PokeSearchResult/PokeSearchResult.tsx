import React from "react";
import "./PokeSearchResult.css";
const PokeSearchResult = () => {
    const selectedPokemon = true;
        return (
            <div className="poke-result-card">
                {
                    selectedPokemon
                     ? (
                         <div>
                             {/* Add the image here */}
                             <p>Name: Pikachu</p>
                             <p>Id: Some id</p>
                             <p>Height: something</p>
                             <p>Weight: something</p>
                             <p>Base exp: 100</p>
                         </div>
                     )
                     :
                     (
                         <h2>Welcome to the Pokedex</h2>
                     )
                }
            </div>
            
        )
}

export default PokeSearchResult;