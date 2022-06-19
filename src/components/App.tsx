import React from "react";
import { pokemonData } from "../data/PokemonData";
import './App.css';
import Pokedex from "./Pokedex/Pokedex";

class App extends React.Component{

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