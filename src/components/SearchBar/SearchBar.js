import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { SearchIcon } from '../../assets/icons/SearchIcon'
import { useForm } from '../../Hooks/useForm'

export const SearchBar = () => {

    let history = useHistory()

    const [{search}, handleInputChange, reset] = useForm({
        search: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        search.length > 1 && history.push(`/search?q=${search}`)
        reset()
        
    }
    return (
        <form
            className="searchbar"
            onSubmit={handleSubmit}
        >
            
            <div className="searchbar__container">
                <SearchIcon
                className="searchbar__icon"
                />
                <input
                className="searchbar__input"
                type="text"
                placeholder="FIND YOUR POKEMON..."
                name="search"
                value={search}
                onChange={handleInputChange}
                autoComplete="off"
                />
            </div>
            
        </form>
    )
}
