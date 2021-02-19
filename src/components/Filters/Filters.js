import React, { memo, useContext, useReducer } from 'react';
import { CheckBoxData } from '../../data/CheckBoxData';
import { Checkbox } from './Checkbox';
import '../../styles/styles.scss'
import { PokemonContext } from '../../context/PokemonContext';
import { checkboxesReducers } from '../../reducers/checkboxesReducers';

    const init = ()=> {
         return [{
                data: '',
                id: new Date().getDate(),
                checked: false
            }] 
        }


export const Filters = memo(() => {
    
    const { toogle } = useContext(PokemonContext)

    const [ checkedFilter, dispatch ] = useReducer( checkboxesReducers , [], init )

    const handleCheckbox = (checkName) => {

        const action = {
            type : 'addCheckBox',
            payload : {
                data: checkName,
                id: new Date().getDate(),
                checked: true
            }
        }

        dispatch(action)
    } 


    console.log(checkedFilter)

    return (
        <>  
            <aside
            className={`filters ${ toogle? 'active' : 'inactive'}`}
            id="filters"
            // style={{left: '-360px'}}
            >
                <h2 className="filters__title">Filters</h2>
                <form>
                    <div className="filters__columns">
                        <div>
                            {
                            CheckBoxData.map( (check, i) => {
                              return  i < 10 &&
                              <Checkbox 
                                {...check}
                                key={check.type}
                                handleCheckbox={handleCheckbox}
                                />
                                })
                             }   
                        </div>
                        <div>
                            {
                            CheckBoxData.map( (check, i) => {
                              return  i > 10 && 
                              <Checkbox 
                              {...check} 
                              key={check.type}
                              handleCheckbox={handleCheckbox}
                              />
                                })
                             }   
                        </div>
                        
                    </div>
                             
                </form>
            </aside>
        </>
    );
})
