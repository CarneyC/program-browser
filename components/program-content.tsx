import React, { useMemo } from 'react';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import { AppointmentTooltip } from '@devexpress/dx-react-scheduler-material-ui';
import RoomIcon from '@material-ui/icons/Room';
import LabelIcon from '@material-ui/icons/Label';
import { AppointmentTooltip as AppointmentTooltipBase } from '@devexpress/dx-react-scheduler';
import HelpIcon from '@material-ui/icons/Help';
import Tags from './tags';
import Field from './field';
import { Button } from '@material-ui/core';
import ResidentList from './resident-list';
import { Resident } from './resident-item';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

export interface ProgramModel {
  id: string;
  location: string;
  name: string;
  startDate: Date | string;
  endDate: Date | string;
  tags: string[];
  type: string;
  attendance: Resident[];
}

export interface ProgramContentProps
  extends AppointmentTooltipBase.ContentProps {
  appointmentDate: ProgramModel;
}

export default function ProgramContent({
  children,
  appointmentData,
  ...restProps
}: ProgramContentProps) {
  const facilitators = useMemo(() => appointmentData.facilitators.join(' / '), [
    appointmentData,
  ]);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppointmentTooltip.Content
      {...restProps}
      appointmentData={appointmentData}
    >
      <Field iconComponent={<RoomIcon />}>{appointmentData.location}</Field>
      <Field iconComponent={<PersonIcon />}>{facilitators}</Field>
      <Field iconComponent={<BeachAccessIcon />}>
        <Tags labels={appointmentData.hobbies} color="secondary" />
      </Field>
      <Field iconComponent={<LabelIcon />}>
        <Tags labels={appointmentData.tags} color="primary" />
      </Field>
      <Field iconComponent={<HelpIcon />}>
        <Tags labels={appointmentData.levelOfCare} variant="default" />
      </Field>
      <Field iconComponent={<PeopleIcon />}>
        <Button color="primary" onClick={handleClickOpen}>
          View attendance
        </Button>
      </Field>

      <ResidentList
        data={appointmentData.attendance}
        open={open}
        onClose={handleClose}
      />
    </AppointmentTooltip.Content>
  );
}
