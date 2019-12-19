export const createYoda = (settings) => {
    return {
        type: "createYoda",
        settings: settings
    };
};

export const feedYoda = (data) => {
    return {
        type: "feedYoda",
        feed_data: data.data.fed_at
    };
};

export const updateAge = () => {
 
    return {
        type: "updateAge",
        time: Math.floor(Date.now() / 1000) 
    };
};

export const createError = (data) => {
    console.log(data);
    return {
        type: "createError",
        error: data
    };
};

export const updateHealth = () => {

    return {
        type: "updateHealth",
    };
};

export const loadYoda = (data) => {
    
    let { id, name, colour } = data[0];

    return {
        type: "loadYoda",
        id: id,
        name: name,
        color: colour
    };
};

export const resetGame = () => {

    return {
        type: "resetGame"
    };
};
