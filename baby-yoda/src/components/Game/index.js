import { connect } from 'react-redux';
import Game from './Game';
import { updateAge } from '../../Actions/state';
import { postFeed } from '../../Actions/api';

const mapStateToProps = state => {
    return {
        name: state.name,
        color: state.color,
        age: state.age,
        health: state.health,
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        feedClick: () => dispatch(postFeed()),
        updateAge: () => dispatch(updateAge())
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Game);