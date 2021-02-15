import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ResidentItem, { Resident } from './resident-item';
import { Dialog, DialogTitle } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    backgroundColor: '#ffaaaa',
    color: '#fff',
  },
}));

export interface ResidentListProps {
  data: Resident[];
  open: boolean;
  onClose: () => void;
}

export default function ResidentList({
  data,
  open,
  onClose,
}: ResidentListProps) {
  const classes = useStyles();

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle id="attendance-title" className={classes.header}>
        Attendance
      </DialogTitle>
      <List className={classes.root}>
        {data.map((resident) => (
          <ResidentItem data={resident} key={resident.id} />
        ))}
      </List>
    </Dialog>
  );
}
