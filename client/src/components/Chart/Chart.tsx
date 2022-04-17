import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from '../../api';
import { DailyDataItemType, DataType } from '../../types';
import styles from './Chart.module.css';

interface Props {
  data: DataType;
  country: string;
}

const Chart: React.FC<Props> = ({ data, country }) => {
  const [dailyData, setDailyData] = useState([]);
  const { confirmed, recovered, deaths } = data;
  // console.log(data);

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  // const barChart = confirmed ? (
  //   <Bar
  //     data={{
  //       labels: ['Infected', 'Recovered', 'Deaths'],
  //       datasets: [
  //         {
  //           label: 'People',
  //           backgroundColor: [
  //             'rgba(0, 0, 255, 0.5)',
  //             'rgba(0, 255, 0, 0.5)',
  //             'rgba(255, 0, 0, 0.5)',
  //           ],
  //           data: [confirmed.value, recovered.value, deaths.value],
  //         },
  //       ],
  //     }}
  //     options={{
  //       legend: { display: false },
  //       title: { display: true, text: `Current state in ${country}` },
  //     }}
  //   />
  // ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(
              (dailyDataItem: DailyDataItemType) => dailyDataItem.confirmed,
            ),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(
              (dailyDataItem: DailyDataItemType) => dailyDataItem.deaths,
            ),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {/* {country ? barChart : lineChart} */}
      {/* {lineChart} */}
    </div>
  );
};

export default Chart;
