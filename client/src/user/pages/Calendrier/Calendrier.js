import React, { useState, useEffect } from "react";
import ProchaineSeance from "./ProchaineSeance";
import './Calendrier.css';
import sessions from "../Data/SessionsData";
import SessionCard from "./SessionCard"
import { Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
//import Particles from 'react-particles-js';


function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    width: '80%',
    marginLeft: '10%',
  },
});

const relativedate = new Date(2021, 1, 16, 10) // fonction pour retirer la prochaine date
function closestdate(arr) {
  let dates = arr.map(item => item.date)
  dates.sort(function (a, b) {
    var distancea = Math.abs(relativedate - a);
    var distanceb = Math.abs(relativedate - b);
    return distancea - distanceb;
  })
  dates = dates.filter(d => d > relativedate)
  return arr.find(d => dates[0] === d.date)
}


const Calendrier = () => {
  const [date, setDate] = useState(new Date());
  const [data, setdata] = useState(sessions)
  const [Nextsession, setNextsession] = useState(closestdate(data))
  useEffect(() => {
    setdata(sessions)
  }, [])

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <div>
     
      <h1 className='title'>Sessions</h1>
      <Container fixed>
        <center>
          <ProchaineSeance session={Nextsession} />
        </center>
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Toute les séances" />
            <Tab label="Séance prochaines" />
            <Tab label="Séeance précidentes" />
          </Tabs>
          <TabPanel value={value} index={0} >
            <SessionCard sessions={sessions} />
          </TabPanel>
          <TabPanel value={value} index={1} >
            <SessionCard sessions={sessions.filter(s => s.date > relativedate)} />
          </TabPanel>
          <TabPanel value={value} index={2} >
            <SessionCard sessions={sessions.filter(s => s.date < relativedate)} />
          </TabPanel>
        </Paper>
        <div className="next-session">
        </div>
      </Container>
      
    </div>
  );
};

export default Calendrier;
