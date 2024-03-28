import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = (state) => ({
  weatherData: state.weatherReducer.weatherData,
});

export default connect(mapStateToProps)(Dashboard);