import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar/SearchBar';
import { Pokeball } from '../../assets/icons/PokeBall';
import '../../styles/styles.scss';
import { Menu } from '../../assets/icons/Menu';

import { Filters } from '../Filters/Filters';
import { PokemonContext } from '../../context/PokemonContext';

export const Header = () => {

    const {toogle, settoogle} = useContext(PokemonContext)


    const makeToogle = useCallback((toogle)=>{
        settoogle(!toogle)
    },[settoogle])

    console.log(toogle)

    return (
        <header className="header">
                <button 
                className="header__menu"
                onClick={makeToogle}
                >
                    <Menu/>
                </button>
                <figure className="header__logo">
                    <Link to="/">
                        <Logo/>
                    </Link>
                </figure>
                <div className="header__nav">
                    <SearchBar/>
                    <button className="header__nav__pokeball">
                        <Pokeball/>
                        <div className="header__nav__pokeball__icon"> 1 </div>
                    </button>
                </div>
                <Filters/>
        </header>
    )
}
