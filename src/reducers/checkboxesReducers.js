export const checkboxesReducers = (state = [], action) => {
    switch (action.type) {
        case 'addCheckBox':
            return [action.payload, ...state]
        case 'deleteCheckbox':
            return state.filter(check => check.id !== action.payload)
        default:
            return state 
    }
   
}
