import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  ViewSwitcher,
  MonthView,
  WeekView,
  DayView,
  Toolbar,
  DateNavigator,
  Appointments,
  AppointmentTooltip,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';

import { useMemo } from 'react';
import ProgramContent from './program-content';
import ProgramHeader from './program-header';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const currentDate = '2018-11-01';

const useStyle = makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
  },
}));

export default function ProgramCalendar({ data }) {
  const defaultDate = useMemo(() => data?.[0]?.startDate ?? currentDate, [
    data,
  ]);

  const classes = useStyle();

  return (
    <Container className={classes.root}>
      <Paper elevation={4}>
        <Scheduler data={data} height={700}>
          <ViewState
            defaultCurrentDate={defaultDate}
            defaultCurrentViewName="Week"
          />
          <MonthView />
          <DayView />
          <WeekView />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <ViewSwitcher />
          <Appointments />
          <AppointmentTooltip
            headerComponent={ProgramHeader}
            contentComponent={ProgramContent}
            showCloseButton
          />
        </Scheduler>
      </Paper>
    </Container>
  );
}
