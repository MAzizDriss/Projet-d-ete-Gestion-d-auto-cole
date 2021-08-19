import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { MdExpandMore } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { BsPencilSquare } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { Tooltip } from '@material-ui/core'
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useHistory } from 'react-router';
import {GoAlert} from 'react-icons/go'
import './Candidats.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
    marginLeft: 400,
    marginBottom: 135
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
    marginTop: 50,
  },
  pay: {
    marginTop: 50,
  },

  icon1: {
    right: "-600px",
    marginTop: -200
  },
  icon2: {
    right: "-610px",
    marginTop: -70
  },
  sessionsmap: {
    marginRight: 50,
    display: "flex"
  },
  detailsm: {
    display: "flex",
    flexDirection: "column"
  }
}));



export default function CandidatCard({ candidats }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const history = useHistory();

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
    const handleNo = () => {
      setOpen(false);
    };
    const handleYes = () => {
      axios.delete(`http://localhost:3001/api/admin/client/${candidat.id}`, {
        headers: {
          "auth-token": localStorage.getItem('token')
        }
      }).then(() => {
        setOpen(false)
        history.go(0)
      }).catch(err => console.log(err))


    }
    return (
      <div>
        <MdDelete onClick={handleClickOpen} />

        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleNo}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Supprimer un candidat ?"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Êtes-vous sûr de supprimer {candidat.name} ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleNo} color="primary">
              Non
            </Button>
            <Button onClick={handleYes} color="primary" autoFocus>
              Oui
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      {candidats.map(candidat =>
        <Accordion expanded={expanded === candidat.id} onChange={handleChange(candidat.id)} key={candidat.id}>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>Nom du candidat : </Typography>
            <Typography className={classes.secondaryHeading}>{!candidat.payment&&<GoAlert style={{marginLeft:'0',color:'red'}}/>} {candidat.name} </Typography>

          </AccordionSummary>
          <br />
          <br />
          <AccordionDetails className={classes.detailsm}>
            <Typography>
              Les séances réalisées :{candidat.sessions.map(session=><span>{session} |</span>)}
            </Typography>

            <div className={classes.date}>
              <Typography className={classes.heading4}>
                Date d'inscription : {candidat.createdAt.substring(0,10)}

              </Typography>
            </div>
            <div className={classes.pay}>
              <Typography className={classes.heading}>
                 {(candidat.payment) ? <span style={{fontSize:'1.2rem', color:'green'}}>Paiement verifié</span> :  <span style={{fontSize:'1.2rem', color:'red'}}>Pas de paiement</span>}
              </Typography >
            </div>

          </AccordionDetails>
          <div className={classes.icons}>
            <Tooltip title="Modifier" >

              <div className="UpdateButton" >
                <Link to={`/Candidats/Formulaire/${candidat.id}`} ><BsPencilSquare style={{ fill: '#3A506B' }} /></Link>

              </div>
            </Tooltip>
            <Typography >
              <Tooltip title="Supprimer" >
                <IconButton className={classes.icon2} >
                  <ButtonDelete candidat={candidat} style={{ position: 'absolute' }} ><MdDelete style={{ fill: '#3A506B' }} /></ButtonDelete>

                </IconButton>
              </Tooltip>
            </Typography></div>

        </Accordion>
      )}
    </div>

  );

}