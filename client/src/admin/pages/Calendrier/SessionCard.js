import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md'
import { BsPencilSquare } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    color: '#0B132B'
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginRight: '5%'
  },
}));

export default function SessionCard({ sessions, clients, employees }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [sessdata, setsessdata] = useState(sessions)
  const [clientdata, setclientdata] = useState(clients)
  const [empdata, setempdata] = useState(employees)
  React.useEffect(
    () => {
      setsessdata(sessions)
    }
    , [sessions])
  React.useEffect(
    () => {
      setclientdata(clients)
    }
    , [clients])
  React.useEffect(
    () => {
      setempdata(employees)
    }
    , [employees])


  return (

    <div className={classes.root}>
      {sessdata.map(s =>
        <Accordion expanded={expanded === s.ref} onChange={handleChange(s.ref)} key={s.ref}>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"

          >
            <Typography className={classes.heading}> {(clientdata[s.clientId - 1]) ? clientdata[s.clientId - 1].name : ''}</Typography>
            <Typography className={classes.secondaryHeading} >{new Date(s.date).toString().substring(0, 21)}</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography className={classes.secondaryHeading} >
              {s.ref}
            </Typography>
            <br />
            <Typography className={classes.secondaryHeading}>
              Teacher : {(empdata[s.employeeId - 1]) ? empdata[s.employeeId - 1].name : ''}
            </Typography>
            <Typography className={classes.secondaryHeading} >
              {(s.vehiculeId != null) ? `véhicule :${s.vehiculeId}` : ''}
            </Typography>
            <Link to={`/Sessions/edit/${s.ref}`} style={{ position: 'absolute', left: '94.6%' }} ><BsPencilSquare style={{ fill: '#3A506B' }} /></Link>
          </AccordionDetails>
        </Accordion>)}

    </div>
  );
}
