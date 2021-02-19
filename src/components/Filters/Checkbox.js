import React, { useContext } from 'react'
import { PokemonContext } from '../../context/PokemonContext'
import { useForm } from '../../Hooks/useForm'

export const Checkbox = ({type, handleInputChange}) => {

   
   const checkName = type.toLowerCase()

    return (
        <>
            <input
                type="checkbox"
                id={checkName }
                name='check'
                value={checkName }
                onChange={ () => handleInputChange(checkName)}
            />
            <label htmlFor={checkName}>
                {type}
            </label><br/>
        </>
    )
}
