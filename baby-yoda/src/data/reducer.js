// import initial from './initial';

const saveYoda = (state, action) => ({
    ...state,
    name: action.settings.name,
    color: action.settings.colour,
    submitted: true,
    yoda_id: action.settings.id,
    dob: action.settings.dob,
    last_fed: Math.floor(Date.now() / 1000),
});

const feedYoda = (state, action) => ({
    ...state, 
    last_fed: action.feed_data
});

const updateAge = (state, action) => {
    
    return {
        ...state, 
        age: action.time - state.dob
    };
};

const updateHealth = (state) => {

    return {
        ...state, 
        health: 100 - Math.floor(((Math.floor(Date.now() / 1000)) - state.last_fed) / 1),
        alive: state.health <= 0 ? false : true,
    };
};

const createError = (state, action) => {

    return {
        ...state, 
        errors: [...state.errors, action.error]
    };
};

const loadYoda = (state, action) => {
    return {
        ...state,
        yoda_id: action.id,
        name: action.name,
        color: action.color,
        submitted: true
    }
}

const reducer = (state, action) => {
    switch (action.type){

         case "createYoda": return saveYoda(state, action);
         case "feedYoda": return updateHealth(feedYoda(state, action));
         case "updateAge": return updateAge(state, action);
         case "updateHealth": return updateHealth(state, action);
         case "createError": return createError(state, action);
         case "loadYoda": return loadYoda(state, action);

         default: return state;
    }
}

export default reducer;