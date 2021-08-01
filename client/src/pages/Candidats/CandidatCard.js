import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { RiDeleteBin6Fill, RiMailDownloadFill } from 'react-icons/ri';
import { CgMoreVertical } from 'react-icons/cg'
import { BsPencilSquare } from 'react-icons/bs';
import IconButton from '@material-ui/core/IconButton';
import { Route } from "react-router-dom";
import Formulaire from './Formulaire';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import { brown } from '@material-ui/core/colors';
import { Link } from '@material-ui/core';



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
    right: -450,
    top:15
  },
  icon2: {
    right: -300,
    top: -46
  }
}));



export default function CandidatCard({ candidats }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [candidatdata, setcandidatdata] = useState(candidats)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const ButtonDelete = ({ candidat }) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={handleClickOpen} >Supprimer</Button>

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Supprimer un candidat ?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Êtes-vous sûr de supprimer {candidat.name} ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} color="primary">
              Non
            </Button>
            <Button onClick={handleClose} color="primary" autoFocus>
              Oui
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {candidatdata.map(candidat =>
      <Accordion expanded={expanded === candidat.id} onChange={handleChange(candidat.id)} key={candidat.id}>
        <AccordionSummary
          expandIcon={<CgMoreVertical />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Nom du candidat : </Typography>
          <Typography className={classes.secondaryHeading}>{candidat.name}</Typography>

        </AccordionSummary>
        <br/>
        <br/>
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
            <IconButton className={classes.icon1} >
              <ButtonDelete candidat={candidat} />
            </IconButton>
            <Typography >
              <IconButton className={classes.icon2} >
              <Button href={`/Candidats/Formulaire/${candidat.id}`} variant="outlined" color="primary"  >Modifier</Button>
              </IconButton>
            </Typography>
          </div>
        </AccordionDetails>

      </Accordion>
      )}
    </div>
          
  );
          
}
