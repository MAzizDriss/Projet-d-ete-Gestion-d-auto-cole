import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
  },
  media: {
    height: 140,
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
    marginLeft: 15,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
    marginLeft: 15,
    marginTop: 15,
  },

  date: {
    marginTop: 50,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    marginLeft: 5

  },
  entretien: {
    top: -100,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '99.33%',
    flexShrink: 0,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 15
  },
  etat: {
    marginLeft: -600,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '99.33%',
    flexShrink: 0,
    marginRight: 10,
    marginLeft: 5,
    marginTop: 15
  },

  Rating: {
    marginRight: 100,
    top: 100,
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '99.33%',
    flexShrink: 0,
    right: 250,
  },

}));
function nextDate(date, jour, period) {
  var months = 0
  let years = (new Date()).getFullYear() - (date.getFullYear() + 1)
  if (years < 0) {
    years = 0;
    months = (new Date()).getMonth() - date.getMonth()
    console.log(months)}
  else {months += 12 - date.getMonth() + (new Date()).getMonth() + 1}
  months += years * 12
  if (jour > (new Date()).getDate()) {
    months--
  }
  let next_month = 0
  if (months % period === 0 ) {
    next_month =new Date().getMonth();
    if (jour > (new Date()).getDate()||months===0) {
      console.log('entred')
      next_month += period
      console.log(next_month)
    }
  }
  else {next_month = period -(months % period) + new Date().getMonth() + 1}

  if (next_month > 12) {
    console.log(months)
    next_month = next_month % 12

    return ((new Date().getFullYear() + Math.floor(months/12)) + '-' + next_month + '-' + jour)
  }

  return ((new Date().getFullYear()) + '-' + next_month + '-' + jour)

}

export default function CarCard({ car }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (

    <Card className={classes.root} variant="outlined" key={car.id}>
      <div>
        <CardContent>
          <CardMedia
            className={classes.media}
          >
            <img src={car.imageLink} width='250px' />
          </CardMedia>
          <br /><br />
          <Typography className={classes.heading}> {car.marque} {car.modele}</Typography>
          <Typography className={classes.secondaryHeading}>{car.disponibilite}</Typography>

          <Typography variant="h5" component="h2">

          </Typography>
          <div className={classes.date}>
            <Typography>
              Date d'achat : {(car.dateAchat) &&  car.dateAchat.substring(0, 10) }
            </Typography>
            <br/>
            <Typography>
              Date de visite technique : {(car.visiteTech) &&  car.visiteTech.substring(0, 10) }
            </Typography>
          </div>

          <div>
            <Box className={classes.etat} component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Etat du véhicule</Typography>
              <Rating
                name="disabled"
                value={car ? car.etat : 2}
                disabled
              />
            </Box>
          </div>
          <div className={classes.entretien}>
            <Typography>
              <h3 style={{color:'#f5bd1f'}}>Date du prochain petit entretien : </h3> {car.entretienP &&  nextDate(new Date(car.dateAchat), car.entretienP.jour, car.entretienP.periode) }
            </Typography >
            <Typography>
              <h3 style={{color:'red'}}>Date du prochain grand entretien : </h3> {car.entretienG ? nextDate(new Date(car.dateAchat), car.entretienG.jour, car.entretienG.periode) : 'nope'}
            </Typography >
          </div>
          <div>
            <FormControl className={classes.formControl} disabled>
              <InputLabel htmlFor="name-native-disabled"></InputLabel>
              <NativeSelect
                onChange={handleChange}
                inputProps={{
                  name: car.service,
                  id: 'name-native-disabled',
                }}
              >
                <option value="">{(car.disponibilite) ? 'Disponible' : 'Non Disponible'}</option>
              </NativeSelect>
            </FormControl>
          </div>

          {car.entretienP ? console.log(nextDate(new Date(car.dateAchat), car.entretienP.jour, car.entretienP.periode)) : 'nope'}
          <div className={classes.icons}>
            <Button href={`/Vehicules/Formulaire/${car.id}`} variant="contained" color="secondary" style={{ marginLeft: '30%', width: '40%', marginTop: '-29%' }}>
              <center style={{ marginRight: '15%' }} >Modifier</center>
            </Button>
          </div>
        </CardContent>

      </div>

    </Card>
  );
}
