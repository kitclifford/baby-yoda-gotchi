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

    return {
        type: "loadYoda",
        id: data.data.id,
        name: data.data.name,
        color: data.data.colour,
        dob: data.data.dob, 
        last_fed: data.data.latest_feed
    };
};

export const resetGame = () => {

    return {
        type: "resetGame"
    };
};
