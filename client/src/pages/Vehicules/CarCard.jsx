/*import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { CgMoreVertical } from 'react-icons/cg'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import {AiFillCar} from 'react-icons/ai'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
   // marginLeft: 400,
     //marginTop: 150
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    top: 70,
    marginTop: 92,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    right: 1,

    marginRight: 200,
    marginLeft: -730
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginLeft:50
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
  secondaryHeading2: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginRight: 25,
  },
  date: {
    top: 50,
    marginTop: 92,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    right: 1,

    marginRight: 20,
    marginLeft: 5

  },
 entretien: {
   marginLeft:-600,
   fontSize: theme.typography.pxToRem(15),
    flexBasis: '99.33%',
    flexShrink: 0,
    marginRight: 10,
    marginLeft: -265
 },
  icons: {
    marginTop: 200,
  },
  icon1: {
    right: -450,
    top:15
  },
  icon2: {
    right: 200,
    top: -33
  },
  cards: {
     marginBottom:15
  },
  Rating: {
    marginRight:100,
    top:100,
    fontSize: theme.typography.pxToRem(15),
     flexBasis: '99.33%',
     flexShrink: 0,
     right:250
  }
}));



export default function CarCard({ cars }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [cardata, setcardata] = useState(cars)
  const [value, setValue] = React.useState(2);
  const [state, setState] = React.useState({
    Service: '',
  });

  const handleClicked = (event) => {
    const Service = event.target.name;
    setState({
      ...state,
      [Service]: event.target.value,
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className={classes.root}>
      {cardata.map(car =>
      <Accordion className={ classes.cards } expanded={expanded === car.id} onChange={handleChange(car.id)} key={car.id}>
        <AccordionSummary
          expandIcon={<CgMoreVertical />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <AiFillCar/> 
          <Typography className={classes.heading}> {car.marque} {car.modele}</Typography>
          <Typography className={classes.secondaryHeading}>{car.disponibilite}</Typography>

        </AccordionSummary>
        <br/>
        <br/>
        <AccordionDetails>
          <Typography>
            
          </Typography>
          
          <div className={classes.date}>
            <Typography>
              Date d'achat : {car.DateAchat}

            </Typography>
          </div>
          <div className={classes.entretien}>
            <Typography>
              Date du prochain entretien : {car.DateEntretien}
            </Typography >
          </div>
          <div>
      <Box className={classes.entretien} component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Etat du véhicule</Typography>
        <Rating
          name="disabled"
          value={value}
          disabled
        />
      </Box>
      </div>
      <div>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled"></InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          inputProps={{
            name: car.service,
            id: 'name-native-disabled',
          }}
        >
        <option value="">{car.service}</option>
        </NativeSelect>
      </FormControl>
      </div>
          <div className={classes.icons}>
          <Typography >
              <IconButton className={classes.icon2} >
              <Button href={`/Vehicules/Formulaire/${car.id}`} variant="outlined" color="primary"  >Modifier</Button>
              </IconButton>
            </Typography>
          </div>
        </AccordionDetails>

      </Accordion>
      )}
       <Button href='/Vehicules/ajouter' variant="contained" color="secondary" style={{marginLeft:'60%',width:'40%', marginTop:'2%'}}>
         <center style={{marginRight:'15%'}} >Ajouter</center>
        </Button>
    </div>
          
  );
          
}*/


import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    top: -100,
    marginTop: 92,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginLeft: 22
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginLeft:15,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: 15,
    marginTop:15,
  },

  date: {
    marginTop: 50,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginLeft: 5

  },
 entretien: {
   fontSize: theme.typography.pxToRem(15),
    flexBasis: '99.33%',
    flexShrink: 0,
    marginRight: 10,
    marginLeft: 5,
    marginTop:15
 },
  etat: {
    marginLeft:-600,
    fontSize: theme.typography.pxToRem(15),
     flexBasis: '99.33%',
     flexShrink: 0,
     marginRight: 10,
     marginLeft: 5,
    marginTop: 15  },
 
  Rating: {
    marginRight:100,
    top:100,
    fontSize: theme.typography.pxToRem(15),
     flexBasis: '99.33%',
     flexShrink: 0,
     right:250
  }

}));

export default function CarCard({ car }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [expanded, setExpanded] = React.useState(false);
  const [state, setState] = React.useState({
    Service: '',
  });

  const handleClicked = (event) => {
    const Service = event.target.name;
    setState({
      ...state,
      [Service]: event.target.value,
    });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
    <Card className={classes.root} variant="outlined">
      <div>
          <CardContent>
          <Typography className={classes.heading}> {car.marque} {car.modele}</Typography>
          <Typography className={classes.secondaryHeading}>{car.disponibilite}</Typography>

            <Typography variant="h5" component="h2">
            </Typography>
            <div className={classes.date}>
            <Typography>
              Date d'achat : {car.DateAchat}

            </Typography>
          </div>
          <div className={classes.entretien}>
            <Typography>
              Date du prochain entretien : {car.DateEntretien}
            </Typography >
          </div>
          <div>
      <Box className={classes.etat} component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Etat du véhicule</Typography>
        <Rating
          name="disabled"
          value={value}
          disabled
        />
      </Box>
      </div>
      <div>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled"></InputLabel>
        <NativeSelect
          value={state.name}
          onChange={handleChange}
          inputProps={{
            name: car.service,
            id: 'name-native-disabled',
          }}
        >
        <option value="">{car.service}</option>
        </NativeSelect>
      </FormControl>
      </div>
          <div className={classes.icons}>
            <Button href={`/Vehicules/Formulaire/${car.id}`} variant="contained" color="secondary" style={{marginLeft:'30%',width:'40%', marginTop:'-29%'}}>
         <center style={{marginRight:'15%'}} >Modifier</center>
        </Button>
          </div>
          </CardContent>
          
          </div>
    
      </Card>
  );
}
