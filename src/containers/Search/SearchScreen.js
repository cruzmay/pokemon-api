import React, { useContext, useMemo } from 'react'
import queryString from 'query-string'
import { PokemonCard } from '../../components/Pokemons/PokemonCard'
import { useLocation } from 'react-router-dom'
import { FilteredSearch } from '../../selectors/FilteredSearch'
import { PokemonContext } from '../../context/PokemonContext'
import { PokemonModal } from '../../components/Pokemons/PokemonModal'

export const SearchScreen = () => {

    const {poke, setmodal} = useContext(PokemonContext)
    const location = useLocation()

    const parsed = queryString.parse(location.search)
    const { q = '' } = parsed

    const FilteredSearch = () => {
        return poke.filter( pokemon => {
            if(pokemon.name.toLowerCase().includes(q.toLowerCase())){
                return pokemon
            } else {
                return
            }
        })
    }

    const Filtered = FilteredSearch()

    console.log(Filtered)

    return (
        <section className="search">
            <h1>YOUR SEARCH:</h1>
            <div className="search__results">
                {
                Filtered.map( pika => 
                    <PokemonCard
                    key={pika.id}
                    {...pika}
                    
                    /> 
                    )        
                }
            </div>
            
            <PokemonModal/>
        </section>
    )
}
