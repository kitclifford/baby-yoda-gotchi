import { connect } from 'react-redux';
import Game from './Game';

const mapStateToProps = state => {
    return {
        name: state.name,
        color: state.color,
        age: state.age,
        health: state.health,
    };
};

export default connect(mapStateToProps, null)(Game);