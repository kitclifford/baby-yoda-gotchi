import axios from '../axios';
import { createYoda, feedYoda } from './state';

export const postYoda = (settings) => dispatch => {
    axios.post('/', {
        name: settings.name,
        colour: settings.color
    }).then(({ data }) => {
        dispatch(createYoda(data));
    });
}

export const postFeed = () => (dispatch, getState) => {

    const yoda_id = getState().yoda_id;


    axios.post(`/${ yoda_id }/feed`).then(({ data }) => {
        dispatch(feedYoda(data));
    });
}