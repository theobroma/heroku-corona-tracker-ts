import React from 'react';
import cx from 'classnames';
import CountUp from 'react-countup';

import { Card, CardContent, Grid, Typography } from '@material-ui/core';

import type { DataType } from '../../types';

import styles from './Cards.module.css';

interface Props {
  data: DataType;
}

const Info: React.FC<Props> = ({
  data: { confirmed = {}, recovered = {}, deaths = {}, lastUpdate },
}) => {
  const Loading = <div>Loading...</div>;

  const Cards = (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {/* confirmed */}
        {!!confirmed.value && (
          <Grid
            item
            xs={12}
            md={4}
            component={Card}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of active cases of COVID-19.
              </Typography>
            </CardContent>
          </Grid>
        )}
        {/* recovered */}
        {!!recovered.value && (
          <Grid
            item
            xs={12}
            md={4}
            component={Card}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of recoveries from COVID-19.
              </Typography>
            </CardContent>
          </Grid>
        )}
        {!!deaths.value && (
          <Grid
            item
            xs={12}
            md={4}
            component={Card}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2" component="p">
                Number of deaths caused by COVID-19.
              </Typography>
            </CardContent>
          </Grid>
        )}
      </Grid>
    </div>
  );

  return <>{!confirmed.value ? Loading : Cards}</>;
};
export default Info;
