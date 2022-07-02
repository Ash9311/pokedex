import React from "react";
import { pokemonData } from "../../data/PokemonData";
import { PokemonSchema } from "../../types/PokemonSchema";
import Pokelist from "../Pokelist/Pokelist";
import PokeSearchResult from "../PokeSearchResult/PokeSearchResult";
import SearchBox from "../SearchBox/SearchBox";
import "./Pokedex.css"

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
}

const Pokedex = ({searchedPokemons}: PokedexProps) =>{
    console.log(pokemonData)
    return(
        <div className="pokedex-container">
            <div className="pokelist-container">
                <SearchBox />
                <Pokelist searchedPokemons={searchedPokemons}/>
                </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult></PokeSearchResult>
            </div>
        </div>
    );
}

export default Pokedex;