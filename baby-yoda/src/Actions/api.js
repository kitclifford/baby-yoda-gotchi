import axios from '../axios';
import { createYoda } from './state';

// export const postGame = (settings) => dispatch => {
//     axios.post('/games', {
//         player_1: settings.p1Name,
//         player_2: settings.p2Name,
//         winning_score: settings.winningScore,
//         change_serve: settings.alternateEvery
//     }).then(({ data }) => {
//         dispatch(setState(data.data));
//     });
// };

export const postYoda = (settings) => dispatch => {
    axios.post('/', {
        name: settings.name,
        colour: settings.color
    }).then(({ data }) => {
        dispatch(createYoda(data));
    });
}