import { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'

export const FilteredSearch = (q) => {

        const {poke} = useContext(PokemonContext)

        return poke.filter( pokemon => {
            if(pokemon.name.toLowerCase().includes(q.toLowerCase())){
                return pokemon
            } else {
                return
            }
        })
    }