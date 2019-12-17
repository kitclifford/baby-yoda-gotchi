import Homepage from './Homepage';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        submitted: state.submitted
    };
};

export default connect(mapStateToProps)(Homepage);