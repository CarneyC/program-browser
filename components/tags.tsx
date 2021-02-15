import { Chip, ChipProps, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export interface TagsProps {
  labels: string[];
}

const useStyles = makeStyles((theme) => ({
  chip: {
    margin: theme.spacing(0.5),
    textTransform: 'capitalize',
  },
}));

export default function Tags({
  labels,
  ...props
}: TagsProps & Partial<ChipProps>) {
  const classes = useStyles();

  return (
    <Grid>
      {labels.map((label) => (
        <Chip
          label={label}
          key={label}
          variant="outlined"
          size="small"
          className={classes.chip}
          {...props}
        />
      ))}
    </Grid>
  );
}
