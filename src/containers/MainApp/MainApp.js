import React, { useEffect, useReducer, useRef, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { pokeReducers } from '../../reducers/pokeReducers';
import { App } from '../../routes/App';

    const init = () => {
        return JSON.parse(localStorage.getItem('allpokemons'))
    }

export const MainApp = () => {
    
    const [showModal, setshowModal] = useState(false)
    const [modal, setmodal] = useState(1)
    const [checkboxes, setcheckboxes] = useState([])

    // const [ localPokemon ] = useReducer(pokeReducers, [], init)

    const [toogle, settoogle] = useState(false)
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [color, setcolor] = useState([])
    const [load, setLoad] = useState(true);


    const arr = [];

    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=899')
    .then((response) => response.json())
    .then((data) => setResult(
    data.results.map((item) => {
    fetch(item.url)
    .then((response) => response.json())
    .then((allpokemon) => arr.push(allpokemon));
    setPoke(arr);
        }),
    ))
    },[])
    


    setTimeout(() => {
        setLoad(false);
    }, 3000);
    

    return (
        <PokemonContext.Provider
            value= {{ 
                showModal, 
                setshowModal,
                modal, 
                setmodal,
                poke,
                load,
                setLoad,
                toogle, 
                settoogle,
                checkboxes, 
                setcheckboxes
             }}
        >
            <App/>

        </PokemonContext.Provider>
    )
}
