import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React from 'react';

const useStyle = makeStyles(({ palette }) => ({
  icon: {
    textAlign: 'center',
    color: palette.action.active,
  },
  grid: {
    paddingTop: '6px',
    paddingBottom: '2px',
  },
}));

export interface FieldProps {
  children: React.ReactNode;
  iconComponent: React.ReactNode;
}

export default function Field({ children, iconComponent }: FieldProps) {
  const classes = useStyle();

  return (
    <Grid container alignItems="center" className={classes.grid}>
      <Grid item xs={2} className={classes.icon}>
        {iconComponent}
      </Grid>
      <Grid item xs={10}>
        <span>
          {children}
        </span>
      </Grid>
    </Grid>
  );
}
