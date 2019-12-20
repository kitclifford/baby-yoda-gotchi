import axios from '../axios';
import { createYoda, feedYoda, createError, loadYoda, resetGame } from './state';

export const postYoda = (settings) => dispatch => {

    axios.post('', {
        name: settings.name,
        colour: settings.color
    }).then(({ data }) => {
        if(data.error){
            dispatch(createError(data.error));
        }else{
            dispatch(createYoda(data.data));
        }
    });
}

export const postFeed = () => (dispatch, getState) => {

    const yoda_id = getState().yoda_id;

    axios.post(`/${ yoda_id }/feed`).then(({ data }) => {
        dispatch(feedYoda(data));
    });
}

export const getYodaByName = (name) => dispatch => {

    axios.get(`/find/${ name }`).then(({ data }) => {
        if(data.error){
            dispatch(createError(data.error));
        } else {
            dispatch(loadYoda(data));
        }
    });
}

export const deleteYoda = () => (dispatch, getState) => {

    const yoda_id = getState().yoda_id;

    axios.delete(`/${ yoda_id }`).then(() => {
        dispatch(resetGame());
    });

}
