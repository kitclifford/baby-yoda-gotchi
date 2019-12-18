export const createYoda = (settings) => {
    return {
        type: "createYoda",
        settings: settings.data
    };
};

export const feedYoda = (data) => {
    console.log(data.data);
    return {
        type: "feedYoda",
        feed_data: data.data.fed_at
    };
};

export const updateAge = () =>{
 
    return {
        type: "updateAge"
    };
};
