import React from 'react'

export const Checkbox = ({ type, handleCheckbox }) => {

   const checkName = type.toLowerCase()

    return (
        <>
            <input
                type="checkbox"
                id={checkName }
                name='check'
                value={checkName }
                onChange={ ()=> handleCheckbox(checkName)}
            />
            <label htmlFor={checkName}>
                {type}
            </label><br/>
        </>
    )
}
