import { connect } from 'react-redux';
import EndScreen from './EndScreen';
import { deleteYoda } from '../../Actions/api';

const mapStateToProps = state => {
    return{
        name: state.name
    }
}

const mapDispatchToProps = dispatch => {
    return{
        deleteAndReset: () => dispatch(deleteYoda()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EndScreen);