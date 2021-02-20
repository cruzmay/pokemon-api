import React, { useContext, useEffect, useRef, useState } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { useCounter } from '../../Hooks/useCounter'
import { Checkbox } from '../Filters/Checkbox'
import { PokemonCard } from './PokemonCard'
import { PokemonModal } from './PokemonModal'



export const PokemonList = ({ handleModal }) => {

    const { poke, load, checkboxes } = useContext(PokemonContext)
    const { counter, increment} = useCounter(20)

  

    
    
    const FilteredSearch = () => {
        return poke.filter( pokemon => {
            if(pokemon.types[0].type.name.toLowerCase().includes(checkboxes[0].data.toLowerCase())){
                return pokemon
            } else {
                return
            }
        })
    }

    const Filtered = FilteredSearch()
    
    
    return (

        <>
        
        <div className="pokemon__container">
        <section className="pokemon">
            {  
            Filtered.map ( ( pok, i )=> 
               (  i < counter ) &&
                <PokemonCard
                    key={pok.id}
                    {...pok}
                    handleModal={ handleModal }
                />
                )
            }
            
        </section>
        {
            (counter < Filtered.length  && load === false) && 
            <button
            className="pokemon__show-more"
            onClick={increment}
            >
                see more...
            </button>
        }
        
        </div>
        <PokemonModal/>
        </>
    )
}
