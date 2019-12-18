import initial from './initial';

const saveYoda = (state, action) => ({
    ...state,
    name: action.settings.name,
    color: action.settings.colour,
    submitted: true
})

const reducer = (state, action) => {
    switch (action.type){

         case "createYoda": return saveYoda(state, action);
         default: return state;
    }
}

export default reducer;