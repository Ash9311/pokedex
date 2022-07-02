import { on } from 'events';
import './SearchBox.css';

interface SearchboxProps {
    onInputChange: (inputValue: string) => void;
}

const SearchBox = ({onInputChange}:SearchboxProps) => {
    return(
        <input
        onChange ={(e)=>{   
            console.log(e.target.value);
            onInputChange(e.target.value);
        }}
        
        className='search' type="search" placeholder='search Pokemons' />
    )
}

export default SearchBox;