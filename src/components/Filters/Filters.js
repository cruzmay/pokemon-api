import React, { memo, useContext } from 'react';
import { CheckBoxData } from '../../data/CheckBoxData';
import { Checkbox } from './Checkbox';
import '../../styles/styles.scss'
import { PokemonContext } from '../../context/PokemonContext';

export const Filters = memo(() => {
    
    const {checkboxes, setcheckboxes} = useContext(PokemonContext)

    const handleInputChange = (checkname) => {
        setcheckboxes(checkname)
    }
    

    return (
        <>  
            <aside
            className="filters inactive"
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
                                handleInputChange={handleInputChange}
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
                              handleInputChange={handleInputChange}
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
