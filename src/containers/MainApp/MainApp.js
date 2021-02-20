import React, { useEffect, useReducer, useRef, useState } from 'react';
import { PokemonContext } from '../../context/PokemonContext';
import { App } from '../../routes/App';

    

export const MainApp = () => {
    
    const [showModal, setshowModal] = useState(false)
    const [modal, setmodal] = useState(1)
    const [checkboxes, setcheckboxes] = useState('')
    const [checked, setchecked] = useState(false)

    const [toogle, settoogle] = useState(false)
    const [result, setResult] = useState([]);
    const [poke, setPoke] = useState([]);
    const [load, setLoad] = useState(true);
    const [idCheck, setidCheck] = useState('')



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
                setcheckboxes,
                checked,
                setchecked,
                idCheck, 
                setidCheck
             }}
        >
            <App/>

        </PokemonContext.Provider>
    )
}
