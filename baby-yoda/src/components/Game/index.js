import { connect } from 'react-redux';
import Game from './Game';

const mapStateToProps = state => {
    return {
        name: state.name,
        color: state.color,
    };
};

export default connect(mapStateToProps, null)(Game);