import React from 'react';
import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import image from './assets/images/image.png';
// Styles
import './App.css';
import './assets/styles/index.scss';
import styles from './App.module.css';
import { DataType } from './types';

class App extends React.Component {
  state = {
    data: {} as DataType,
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data }, () => {
      // console.log(this.state);
    });
  }

  handleCountryChange = async (country: string) => {
    const data = await fetchData(country);

    this.setState({ data, country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
