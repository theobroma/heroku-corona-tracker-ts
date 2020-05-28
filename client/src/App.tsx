import React from 'react';
import './assets/styles/index.scss';
import './App.css';

import {
  Cards as JsCards,
  CountryPicker,
  Chart as JsChart,
} from './components';
import { fetchData } from './api';
import styles from './App.module.css';
import image from './assets/images/image.png';
/* tslint:disable */
const Cards: any = JsCards; // todo delete me after refactoring to TS
const Chart: any = JsChart; // todo delete me after refactoring to TS
/* tslint:enable */

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data }, () => {
      // console.log(this.state);
    });
  }

  handleCountryChange = async (country: any) => {
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
