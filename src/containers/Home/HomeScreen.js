import React, { useContext, useState } from 'react'
import { FilterIcon } from '../../assets/icons/FilterIcon'
import { HabitatIcon } from '../../assets/icons/HabitatIcon'
import { Filters } from '../../components/Filters/Filters'
import { PokemonList } from '../../components/Pokemons/PokemonList'
import { PokemonModal } from '../../components/Pokemons/PokemonModal'
import { PokemonContext } from '../../context/PokemonContext'
import '../../styles/styles.scss'

export const HomeScreen = () => {

    const {load} = useContext(PokemonContext)   
    return (
        <>
            {
                load ? <div className="loading"><img className="pokemoncard__pokeball" src="./assets/pokeball.gif"/></div> :
                <div>
                    <PokemonList />
                </div>
                
            }
            
        </>
    )
}
