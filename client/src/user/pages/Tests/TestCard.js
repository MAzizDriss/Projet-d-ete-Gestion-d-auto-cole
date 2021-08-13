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
import Questions from './Questions/Questions'


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

export default function TestCard() {
    const [questiondata, setquestiondata] = React.useState(Questions);
   let index = 1;
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

  const nextQuestion = () => {
      index++
      console.log(index)
      return(
          <Card/>
      )
  }

  return (

    <Card className={classes.root} variant="outlined">
      <div>
        <CardContent>
          <CardMedia
            className={classes.media}
          >
            <img src={questiondata[index].image} width='250px' />
          </CardMedia>
          <br/><br/>
          <Typography className={classes.secondaryHeading}>{questiondata[index].reponse}</Typography>

          <Typography variant="h5" component="h2">

          </Typography>
          <div className={classes.date}>
            <Typography>
              Date d'achat : {questiondata[index].option1}

            </Typography>
          </div>
          <div className={classes.entretien}>
            <Typography>
              Date du prochain entretien : {questiondata[index].option2}
            </Typography >
          </div>

          <h3>
           
                <option value="">{questiondata[index].option3} // {questiondata[index].reponse}</option>
              
          </h3>
<button onClick={nextQuestion}>Click</button>
        </CardContent>

      </div>
    </Card>
  );
}
