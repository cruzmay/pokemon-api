export const pokeReducers = (state = [], action) => {
   switch (action.type) {
       case 'get':
            return[...state]
       default:
          return state
   }
}
