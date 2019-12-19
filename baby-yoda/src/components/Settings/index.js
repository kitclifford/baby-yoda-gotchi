import { connect } from 'react-redux';
import Settings from './Settings';
import { postYoda, getYodaByName } from '../../Actions/api';

const mapStateToProps = state => {
    return {
        name: state.name,
        color: state.color,
        errors: state.errors
    };
};

const mapDispatchtoProps = dispatch => {
    return{
        createYoda: settings => dispatch(postYoda(settings)),
        findYoda: name => dispatch(getYodaByName(name))
    }
};

export default connect(mapStateToProps, mapDispatchtoProps)(Settings);