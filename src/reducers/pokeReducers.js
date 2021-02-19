export const pokeReducers = (state = [], action) => {
   switch (action.type) {
       case 'put':
            return[...state]
       default:
          return state
   }
}
