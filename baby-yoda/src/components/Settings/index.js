import { connect } from 'react-redux';
import Settings from './Settings';
import { createYoda } from '../../Actions/state';

const mapStateToProps = state => {
    return {
        name: state.name,
        color: state.color
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        createYoda: settings => dispatch(createYoda(settings))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Settings);