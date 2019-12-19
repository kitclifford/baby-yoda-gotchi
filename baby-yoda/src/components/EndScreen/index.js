import { connect } from 'react-redux';
import EndScreen from './EndScreen';
import { deleteYoda } from '../../Actions/api';

const mapDispatchtoProps = dispatch => {
    return{
        deleteAndReset: () => dispatch(deleteYoda()),
    }
};

export default connect(null, mapDispatchtoProps)(EndScreen);