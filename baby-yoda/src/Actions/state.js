export const createYoda = (settings) => {
    console.log(settings.data);
    return {
        type: "createYoda",
        settings: settings.data
    };
};