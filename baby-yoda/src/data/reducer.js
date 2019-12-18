import initial from './initial';

const saveYoda = (state, action) => ({
    ...state,
    name: action.settings.name,
    color: action.settings.colour,
    submitted: true,
    yoda_id: action.settings.id,
    dob: action.settings.dob,
    last_fed: Math.floor(Date.now() / 1000)
});

const feedYoda = (state, action) => ({
    ...state, 
    last_fed: action.feed_data
});

const updateAge = (state, action) => {
    // const currentTime = Math.floor(Date.now() / 1000);
    // const age = currentTime - state.age;

    return {
        ...state, 
        age: action.time - state.dob
    };
};

const reducer = (state, action) => {
    switch (action.type){

         case "createYoda": return saveYoda(state, action);
         case "feedYoda": return feedYoda(state, action);
         case "updateAge": return updateAge(state, action);

         default: return state;
    }
}

export default reducer;