import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => {
    return {
       submitted: state.submitted,
       alive: state.alive,
    };
};

export default connect(mapStateToProps, null)(App);