import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import { AppointmentTooltip as AppointmentTooltipBase } from '@devexpress/dx-react-scheduler';
import { makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    backgroundColor: '#74b9ff',
    marginBottom: '0.4rem',
  },
  typography: {
    width: '100%',
    fontSize: '1.6rem',
    margin: '0.4rem',
    color: '#fff',
  },
}));

export default function ProgramHeader({
  children,
  appointmentData,
  ...restProps
}: AppointmentTooltipBase.HeaderProps) {
  const classes = useStyle();

  return (
    <AppointmentTooltip.Header
      {...restProps}
      appointmentData={appointmentData}
      className={classes.root}
    >
      <Typography className={classes.typography}>
        {appointmentData.type}
      </Typography>
    </AppointmentTooltip.Header>
  );
}
