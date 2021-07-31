import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import  { CgMoreVertical } from 'react-icons/cg';
import { FaPencilAlt } from 'react-icons/fa';
import IconButton from '@material-ui/core/IconButton';
import { Route } from "react-router-dom";
import Modal from './Modal';
import "./pop.scss";




const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    marginLeft: 400,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: 200,
  },
  heading2: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '2.33%',
    flexShrink: 0,
    marginTop: 50,
    right: 550
  },
  heading4: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    right: 0,

    marginRight: 55,
    marginLeft: 5
  },
  heading3: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginTop: 50,
    marginLeft: -500
  },
  secondaryHeading2: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginRight: 25,
  },
  date: {
    top: 50,
    marginTop: 92,
    marginLeft: -200,

  },
  pay: {
    marginTop: 140,
    marginLeft: -261,
  },
  icons: {
    marginTop: 200,
  },
  icon1: {
    right: -500
  },
  icon2: {
    right: -400,
    top: -46
  }
}));

export default function CandidatCard({ candidat, modal, Toggle}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ActionLink = () => {
    return (      
    <div className="modalContainer">
        <h1>sign</h1>
        </div>
    );
  }

  const Button = () => (
    <Route render={({ history }) => (
      <FaPencilAlt
        type='button'
        onClick={() => { history.push('/Candidats/Formulaire') }}
      />
    )} />
  )


  return (
    <div className={classes.root}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<CgMoreVertical />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Nom du candidat : </Typography>
          <Typography className={classes.secondaryHeading}>{candidat.name}</Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Les sessions réalisés :
          </Typography>
          <div>
            {candidat.sessions.map(session => {
              return (
                <Typography >
                  {session}
                </Typography>
              )
            })
            }
          </div>

          <div className={classes.date}>
            <Typography className={classes.heading4}>
              Date d'inscription : {candidat.insciprtionDate}

            </Typography>
          </div>
          <div className={classes.pay}>
            <Typography className={classes.heading}>
              Payement : {candidat.payement}
            </Typography >
          </div>
          <div className={classes.icons}>
            <IconButton className={classes.icon1}>
              <RiDeleteBin6Fill onClick={ActionLink} onClick={() => Toggle()} />
              <Modal show={modal} close={Toggle} name={candidat.name} />
            </IconButton>
            <Typography >
              <IconButton className={classes.icon2} >
                <Button />
              </IconButton>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
