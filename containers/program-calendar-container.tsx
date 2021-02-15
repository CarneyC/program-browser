import { gql, useQuery } from '@apollo/client';
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core';
import ProgramCalendar from '../components/program-calendar';
import { useMemo } from 'react';

export const ProgramsQuery = gql`
  query Programs {
    programs {
      id
      location
      title: name
      startDate: start
      endDate: end
      tags
      type: dimension
      facilitators
      levelOfCare
      hobbies
      attendance {
        resident {
          id
          name
          status
          room
          levelOfCare
          ambulation
        }
      }
    }
  }
`;

const useStyle = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default function ProgramCalendarContainer() {
  const { loading, data } = useQuery(ProgramsQuery);
  const classes = useStyle();
  const programs = useMemo(
    () =>
      data?.programs
        ? data?.programs.map((program) => ({
            ...program,
            attendance: program.attendance.map((item) => item.resident),
          }))
        : [],
    [data],
  );

  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {loading || <ProgramCalendar data={programs} />}
    </>
  );
}
