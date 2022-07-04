import React from "react";
import { pokemonData } from "../../data/PokemonData";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import "./Pokedex.css"

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    onInputChange:  (inputValue: string) => void;
}

const Pokedex = ({searchedPokemons,onInputChange}: PokedexProps) =>{
    //console.log(pokemonData)
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox  onInputChange={onInputChange} />
                <Pokelist searchedPokemons={searchedPokemons}/>
                </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult></PokeSearchResult>
            </div>
        </div>
    );
}

export default Pokedex;