/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import candidat from '../Data/ClientData';
import avatar from './image1.jpg';
import './Candidats.css';
import { TableRow } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: 500,
    
},
root2: {
    flexGrow: 1,
},
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function CandidatCard({candidat}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
      <Grid container className={classes.root2} spacing={2}>
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <img src={avatar} className="avatar"/>

        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={candidat.name}
        subheader={candidat.insciprtionDate}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <DeleteForeverIcon />
        </IconButton>
        <IconButton aria-label="share">
          <UpdateIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Les sessions réalisées :</Typography>
          <Typography paragraph>
            { candidat.sessions.map(session => {
      return (
        <>
        <div>{session}</div>
       </>
      )
      })
  }
          </Typography>
          <Typography paragraph>
          Payement : {candidat.payement}
          </Typography> 
          
          <Typography>
            Quoi d'autres ?
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </Grid>
  );
}*/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import UpdateIcon from '@material-ui/icons/Update';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import { blueGrey, lightBlue } from '@material-ui/core/colors';
import { useHistory, withRouter, Route } from "react-router-dom";




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

export default function CandidatCard({ candidat }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ActionLink = () => {


    return (

      console.log("brabi a3mali ay signe")

    );
  }

  const Button = () => (
    <Route render={({ history}) => (
      <UpdateIcon 

        type='button'
        onClick={() => { history.push('/Candidats/Formulaire') }}
      />
      
    )} />
  )


  return (
    <div className={classes.root}>

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
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
              <DeleteForeverIcon onClick={ActionLink} />
            </IconButton>
            <Typography >
              <IconButton className={classes.icon2}>

<Button/>              </IconButton>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>



    </div>
  );
}
