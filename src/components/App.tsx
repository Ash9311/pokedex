import React from "react";
import { pokemonData } from "../data/PokemonData";
import './App.css';
import Pokedex from "./Pokedex/Pokedex";

interface AppState {
    searchField: string;
    allPokemon: any;
    searchedPokemon: any;
    selectedPokemon: any;
}
class App extends React.Component<any, AppState>{

    states = {
        searchField:"",
        allPokemons:[],
        searchedPokemons:[],
        selectedPokemons: undefined
    };

    componentDidMount(){
        const pokeData = pokemonData;
    }

    render(){
        return(
             <div className="App">
           <h1>Pokedex</h1> 
           <Pokedex />
            </div>
      
        );
    }
}

export default App;