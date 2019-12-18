export const createYoda = (settings) => {
    return {
        type: "createYoda",
        settings: settings.data
    };
};

export const feedYoda = (data) => {
    return {
        type: "feedYoda",
        feed_data: data.data.fed_at
    };
};

export const updateAge = () =>{
 
    return {
        type: "updateAge",
        time: Math.floor(Date.now() / 1000) 
    };
};

export const updateHealth = () =>{

    // let currentTime = Math.floor(Date.now() / 1000);
    // console.log(currentTime); 

    return {
        type: "updateHealth",
    };
};