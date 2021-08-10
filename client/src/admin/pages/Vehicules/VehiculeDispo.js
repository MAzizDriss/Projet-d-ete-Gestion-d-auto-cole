/*import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cars from '../Data/CarData';

const useStyles = makeStyles({
  root: {
    width: '77.5%',
    minWidth: 275,
    marginTop: '2vw',
    marginBottom: '2vw',
    textAlign: 'center',
    color: '#060b26'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 36,
    color: '#3A506B',
  },
  pos: {
    marginBottom: 12,
  },
});
const VehiculeDispo = () => {
  const [CarData, setcarData] = useState(cars)

function show ({car}){
  return(
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Véhicule disponible:
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {car.marque}
        </Typography>
        <Typography variant="h5" component="h2">
          {car.modele}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {car.etat}
        </Typography>
        <Typography variant="body2" component="p">
          Teacher : {car.serie}
          <br />
          {(car.disponibilite != null) ? `véhicule :${car.disponibilite}` : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/Vehicules/ajouter' variant="contained" color="secondary" style={{marginLeft:'80%',width:'40%'}}>
         <center style={{marginRight:'15%'}} >Ajouter un véhicule</center>
        </Button>
      </CardActions>
    </Card>
  )
}
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {CarData.map(car =>
      <div>
      {(car.disponibilite != 'Disponible')? '' : show({car})}
      </div>
      )}
      </div>
  );
}
export default VehiculeDispo*/

import React, { useState } from 'react';
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
import cars from '../Data/CarData';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    marginBottom:'10%',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 10,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
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
  service: {

  },

  infos: {
    display: "flex",
    flexDirection: 'column',
  },
  title: {
    fontSize: 36,
    color: '#f2f2f2',
    marginLeft: '25%'
  },
}));



export default function VehiculeDispo() {
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
       <Typography className={classes.title} color="textSecondary" gutterBottom>
          Véhicules disponibles:
        </Typography>
      {cardata.map(car =>
        <div>
        {(car.disponibilite != 'Disponible')? '' : 
        <div>
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
        <AccordionDetails className={classes.infos}>
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
              <IconButton className={classes.buttonM} >
              <Button href={`/Vehicules/Formulaire/${car.id}`} variant="outlined" color="primary"  >Modifier</Button>
              </IconButton>
            </Typography>
          </div>
        </AccordionDetails>

      </Accordion>
        </div>
        }
   </div>
  )}
    </div>
  );
          
}