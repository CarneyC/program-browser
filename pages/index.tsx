import { Container } from '@material-ui/core';
import ProgramCalendarContainer from '../containers/program-calendar-container';
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Program Browser</title>
      </Head>
      <Container>
        <ProgramCalendarContainer />
      </Container>
    </>
  );
}
