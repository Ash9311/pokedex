import React from "react";
import { pokemonData } from "../data/PokemonData";
import { PokemonSchema, PokemonSpriteSchema, UnpatchedPokemonSchema } from "../types/PokemonSchema";
import './App.css';
import Pokedex from "./Pokedex/Pokedex";

interface AppState {
    searchField: string;
    allPokemon: PokemonSchema[];
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
}
class App extends React.Component<any, AppState>{
    //fun
    states = {
        searchField:"",
        allPokemons:[],
        searchedPokemons:[],
        selectedPokemons: undefined
    };

    patchPokemonData = (pokemons: UnpatchedPokemonSchema[])=>{
        const patchedPokemons = pokemons.map((pokemon)=>{
            let parsedSprites: PokemonSpriteSchema = {
                normal:undefined,
                animated: undefined
            }

            try{
                parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
            }catch(e){
                console.log("Exception in parsing sprites: ", e); 
            }
            const patchedPokemon: PokemonSchema = {
                ...pokemon,
                sprites: parsedSprites
            };
            return patchedPokemon;
        })     
        return patchedPokemons;
    }

    componentDidMount(){
        //patch the stringified pokemon sprites
       const patchedPokemons: PokemonSchema[] = this.patchPokemonData(
        pokemonData
       );   

       //update the state with the patched pokemons
       this.setState({
        allPokemon: patchedPokemons,
        searchedPokemons: patchedPokemons
       })
    }

    handleInputChange = (inputValue: string)=>{
        console.log(`Input changed to ${inputValue}`);
        //filter the searched pokemons
        const {allPokemon} = this.state;
        const searchedPokemons = allPokemon.filter(
            (pokemon: PokemonSchema) =>{
                return (
                    pokemon.name && pokemon.name.toLowerCase().includes(inputValue.toLowerCase()) 
                )
            }
        )
         this.setState({
            searchField: inputValue,
            searchedPokemons: searchedPokemons
         })   
    }

    render(){
        return(
             <div className="App">
           <h1>Pokedex</h1> 
           <Pokedex searchedPokemons={this.states.searchedPokemons}
            onInputChange={this.handleInputChange}
           />
            </div>
      
        );
    }
}

export default App;