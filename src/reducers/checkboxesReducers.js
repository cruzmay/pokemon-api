export const checkboxesReducers = (state = [], action) => {
    switch (action.type) {
        case 'addCheckBox':
            return [action.payload, ...state]
        default:
            return state 
    }
   
}
