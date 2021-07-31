import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clients from '../Data/ClientData';
import employee from '../Data/Employee';

const useStyles = makeStyles({
  root: {
    width: '60%',
    minWidth: 275,
    marginTop: '2vw',
    marginBottom: '2vw',
    textAlign: 'center',
    color: '#1C2541'
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
const ProchaineSeance = ({ session }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Prochaine Séance:
        </Typography>
        <Typography variant="h5" component="h2">
          {clients[session.client - 1].name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {session.ref}
        </Typography>
        <Typography variant="body2" component="p">
          Teacher : {employee[session.employee - 1].name}
          <br />
          {(session.vehicule != null) ? `véhicule :${session.vehicule}` : ''}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href='/Sessions/add' variant="contained" color="secondary" style={{marginLeft:'80%',width:'40%'}}>
         <center style={{marginRight:'15%'}} >Ajouter</center>
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProchaineSeance