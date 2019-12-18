import { connect } from 'react-redux';
import Game from './Game';
import { updateAge, updateHealth } from '../../Actions/state';
import { postFeed } from '../../Actions/api';

const mapStateToProps = state => {
    return {
        name: state.name,
        color: state.color,
        age: state.age,
        health: state.health,
        alive: state.alive,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        feedClick: () => dispatch(postFeed()),
        updateAge: () => dispatch(updateAge()),
        updateHealth: () => dispatch(updateHealth())

    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Game);