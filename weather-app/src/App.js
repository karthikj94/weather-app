import React from 'react';
import constants from './resources' 
import './App.css';
import TextBox from './TextBox';
import Button from './Button';
import Alert from './Alert';
import Header from './Header';
import { connect } from 'react-redux';
import { fetchWeather, resetWeatherInformation } from './actions';
import Footer from './Footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      city: ''
    }
  }

  handleCity = (e) => {
    let regexp = /^[a-zA-Z]+$/
    let cityName = e.target.value;
    if (cityName === '' || regexp.test(cityName)) {
      this.setState({
        city: e.target.value
      }, () => {
        if(this.state.city === '') {
          this.props.resetWeatherInformation()
        }
      })
    }
  }

  getWeather = () => {
    this.props.fetchWeather(this.state.city)
  }

  render() {
    const showAlert = this.props.weather || this.props.errorMsg
    return (
      <div className="App">
        <Header name={constants.HEADER} />
        <TextBox city={this.state.city} handleCity={this.handleCity} />
        <Button getWeather={this.getWeather} />
        {showAlert ? <Alert weather={this.props.weather} errorMsg={this.props.errorMsg} /> : null }
        <Footer name={constants.FOOTER} />
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    weather: state.weather,
    errorMsg: state.errorMsg
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWeather: (city) => dispatch(fetchWeather(city)),
  resetWeatherInformation: () => dispatch(resetWeatherInformation())
})

export default connect(mapStateToprops, mapDispatchToProps)(App);
