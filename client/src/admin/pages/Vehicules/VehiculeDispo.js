import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { CgMoreVertical } from 'react-icons/cg'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import {AiFillCar} from 'react-icons/ai'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import axios from 'axios';


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
  const [cardata, setcardata] = useState()



  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  React.useEffect(()=>{
    axios.get('http://localhost:3001/api/admin/vehicule/vehicules', {
      headers: {
          "auth-token": localStorage.getItem('token')
      }
  }).then((result) => { setcardata(result.data) })
      .catch((err) => console.log(err))
  },[])

  return (
    <div className={classes.root}>
       <Typography className={classes.title} color="textSecondary" gutterBottom>
          Véhicules disponibles:
        </Typography>
      {cardata && cardata.map(car =>
        <div>
        {(!car.service)? '' : 
        <div>
      <Accordion className={ classes.cards } expanded={expanded === car.id} onChange={handleChange(car.id)} key={car.id}>
        <AccordionSummary
          expandIcon={<CgMoreVertical />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
            <AiFillCar/> 
          <Typography className={classes.heading}> {car.marque} {car.modele}</Typography>
          <Typography className={classes.secondaryHeading}>{car.disponibilite?"Disponible":"Non disponible"}</Typography>

        </AccordionSummary>
        <br/>
        <br/>
        <AccordionDetails className={classes.infos}>
          <Typography>
            
          </Typography>
          
          <div className={classes.date}>
            <Typography>
              Date d'achat : {car.dateAchat.substring(0,16)}

            </Typography>
          </div>
          <div className={classes.entretien}>
            <Typography>
              Date du prochain entretien : {car.dateEntretien.substring(0,16)}
            </Typography >
          </div>
          <div>
      <Box className={classes.entretien} component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Etat du véhicule</Typography>
        <Rating
          name="disabled"
          value={car.etat}
          disabled
        />
      </Box>
      </div>
      <div>
      <FormControl className={classes.formControl} disabled>
        <InputLabel htmlFor="name-native-disabled"></InputLabel>
        <NativeSelect
          value={car.service}
        >
        <option value={true}>En Service</option>
        <option value={false}>HorsService</option>
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