import React, { useContext, useEffect, useState } from 'react'
import { ArrowIcon } from '../../assets/icons/ArrowIcon'
import { ColorIcon } from '../../assets/icons/ColorIcon'
import { DragonIcon } from '../../assets/icons/DragonIcon'
import { GenderIcon } from '../../assets/icons/GenderIcon'
import { HabitatIcon } from '../../assets/icons/HabitatIcon'
import { Ruller } from '../../assets/icons/Ruller'
import { WeigthIcon } from '../../assets/icons/WeigthIcon'
import { PokemonContext } from '../../context/PokemonContext'
import { Logo } from '../Logo/Logo'

export const PokemonModal = () => {

    const { showModal, setshowModal, poke, modal, load, setLoad } = useContext(PokemonContext)
    const [description, setdescription] = useState('')

    
   

    const FindId = () => {
        return poke.find( pokemon => pokemon.id === modal)
    }

    const finded = FindId()
    


    useEffect(() => {
                const callApiDesc = async () => {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${finded.id}/`)
                const data = await response.json()
                setdescription(data)
            }
        callApiDesc()
    },[])


    

    const imagesModal = () => {
            if(finded.id < 10 ) {
                return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${'00' + finded.id}.png`
            } else if(finded.id && finded.id < 99){
                return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${'0' + finded.id}.png`
            } else if (finded.id > 99) {
                return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${finded.id}.png`
            }
        }

    return (
        <>
        {
             load && <div className="loading"><img className="pokemoncard__pokeball" src="./assets/pokeball.gif"/></div> 
        }
            {
         showModal &&
         <div
            onClick={(e)=>{
                setshowModal(!showModal)
            }}
            className="overlay animate__animated animate__fadeIn animate__faster"
            >
            <article className="overlay__modal animate__animated animate__bounceInDown  animate__faster">
                <div className="overlay__modal__image">
                    <Logo className="overlay__modal__image__logo"/>
                    <img src={imagesModal()}/>
                    <div className="overlay__modal__image__bg"></div>
                </div>
                <div className="overlay__modal__info">
                    <div className="overlay__modal__info__title">
                        <h1>{finded.name}</h1>
                        <div>
                            <h3 className="overlay__modal__info__title__id">{finded.id}</h3>
                        </div>
                    </div>
                    <div className="overlay__modal__info__description">
                       <h2>"{description.flavor_text_entries[0].flavor_text}"</h2> 
                    </div>
                    <div className="overlay__modal__info__icons">
                        <div>
                            <Ruller/><p>Height <br/>{finded.height}</p>
                        </div>
                        <div>
                            <WeigthIcon/><p>Weigth<br/>{finded.weight}</p>
                        </div>
                        <div>
                            <DragonIcon/><p>Category<br/>
                            {finded.types.map( (cat, i) => 
                               <span className={cat.type.name} key={i}>{cat.type.name}</span> 
                                )}
                            </p>
                        </div>
                    </div>
                    <div className="overlay__modal__info__icons">
                        <div>
                            <GenderIcon/><p>Gender <br/>N/A</p>
                        </div>
                        <div>
                            <HabitatIcon/><p>Habitat<br/>{description.habitat.name}</p>
                        </div>
                        <div>
                            <ColorIcon/><p>Color<br/>{description.color.name}</p>
                        </div>
                    </div>
                    <div className="separator"></div>
                    <h2>evolution</h2>
                    <div className="overlay__modal__info__evolution">
                        {
                           description.varieties.map( (item, i) => 
                                <div 
                                className="overlay__modal__info__evolution__card"
                                key={i}
                                >
                                     { (i > 0  && i < 6) && <h3>{item.pokemon.name}</h3>}
                                </div>
                            ) 
                        }
                    </div>
                </div>
            </article>
        </div>
     }
     </>
    )
}
