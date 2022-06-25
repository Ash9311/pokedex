import React from "react";
import './Pokecard.css';

const Pokecard = (props: any) =>{
   return( 
       <div className="pokecard">
           <p>{props.name}</p>  
        
       </div>       
   )

       
}
    //  add 2 numbers         

export default Pokecard;