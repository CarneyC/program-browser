import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Avatar, capitalize, ListItemAvatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  inline: {
    display: 'inline',
  },
  subtitle: {
    textTransform: 'lowercase',
  },
}));

export interface Resident {
  id: string;
  name: string;
  status: string;
  room: string;
  levelOfCare: string;
  ambulation: string;
}

export interface ResidentItemProps {
  data: Resident;
}

export default function ResidentItem({ data }: ResidentItemProps) {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar >
            {data.name?.[0]}
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={`${data.name} - ${capitalize(
            data.levelOfCare.toLowerCase(),
          )}`}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {`Room ${data.room}`}
              </Typography>
              <span className={classes.subtitle}>
                {` — ${data.ambulation}`}
              </span>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}
