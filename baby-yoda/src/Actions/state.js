export const createYoda = (settings) => {
    console.log(settings);
    return {
        type: "createYoda",
        settings: settings
    };
};