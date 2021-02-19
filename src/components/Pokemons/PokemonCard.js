import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'


export const PokemonCard = ({ name, id , handleModal }) => {

    const {showModal, setshowModal, setmodal, load} = useContext(PokemonContext)

    
        const link = () => {
            if(id < 10 ) {
                return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${'00' + id}.png`
            } else if(id && id < 99){
                return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${'0' + id}.png`
            } else if (id > 99) {
                return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`
            }
        }
    return (
        <>
        <article className="pokemoncard animate__animated animate__backInRight"
        onClick={(e) => {
                    setshowModal(!showModal)
                    setmodal(id)
                }}
        >
                {
                    load && <img className="pokemoncard__pokeball" src="./assets/pokeball.gif"/>
                }
                {
                    !load && <img
                        className="pokemoncard__image" 
                        src={ link() }
                        alt={name}
                        />
                }
                {
                    !load && <h3>{name}</h3>
                }       
                
                
            </article>
        </>
    )
}
