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

export default function CarCard({ car }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (

    <Card className={classes.root} variant="outlined" key = {car.id}> 
      <div>
        <CardContent>
          <CardMedia
            className={classes.media}
          >
            <img src={car.imageLink} width='250px' />
          </CardMedia>
          <br/><br/>
          <Typography className={classes.heading}> {car.marque} {car.modele}</Typography>
          <Typography className={classes.secondaryHeading}>{car.disponibilite}</Typography>

          <Typography variant="h5" component="h2">

          </Typography>
          <div className={classes.date}>
            <Typography>
              Date d'achat : {(car.dateAchat)?car.dateAchat.substring(0,10):''}

            </Typography>
          </div>
          <div className={classes.entretien}>
            <Typography>
              Date du prochain entretien : {(car.dateEntretien)?car.dateEntretien.substring(0,10):''}
            </Typography >
          </div>
          <div>
            {console.log(car.modele)}
            {console.log(car.etat)}
            {console.log(car.service)}
            <Box className={classes.etat} component="fieldset" mb={3} borderColor="transparent">
              <Typography component="legend">Etat du véhicule</Typography>
              <Rating
                name="disabled"
                value={car?car.etat:2}
                disabled
              />
            </Box>
          </div>
          <div>
            <FormControl className={classes.formControl} disabled>
              <InputLabel htmlFor="name-native-disabled"></InputLabel>
              <NativeSelect
                value={(car.serivce===true)? 'En service':'Hors Service'}
                onChange={handleChange}
                inputProps={{
                  name: car.service,
                  id: 'name-native-disabled',
                }}
              >
                <option value="">{(car.service)? 'En service':'Hors Service'}</option>
              </NativeSelect>
            </FormControl>
          </div>
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
