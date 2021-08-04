import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import sessions from '../Data/SessionsData';
import {Link} from 'react-router-dom'
const useStyles = makeStyles({
    root: {
        marginLeft:'15px',
        minWidth: 400,
        display:'inline-block'
        
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
});

const relativedate = new Date(2021, 1, 16, 10) // fonction pour retirer la prochaine date
function closestdate(arr) {
    let sessdata = arr.map(
        ref =>
            sessions.find(d => d.ref == ref)
    )
    let dates = sessdata.map(item => item.date)
    dates.sort(function (a, b) {
        var distancea = Math.abs(relativedate - a);
        var distanceb = Math.abs(relativedate - b);
        return distancea - distanceb;
    })
    dates = dates.filter(d => d > relativedate)
    return sessdata.find(d => dates[0] === d.date)
}
function Sessionsbymonth(arr,month){
    let sessdata = arr.map(
        ref =>
            sessions.find(d => d.ref == ref)
    )
    const sessdata2=sessdata.filter(d=> d.date.getMonth()===month )
    return sessdata2.length
}
const EmployeeCard = ({ emp }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} variant="outlined" key={emp.id}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    employee
                </Typography>
                <Typography variant="h5" component="h2">
                    {emp.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    prochaine séance : {(emp.sessions.length>0)?closestdate(emp.sessions).date.toString().substring(0, 21):''}
                </Typography>
                <Typography variant="body2" component="p">
                    Nombre de séance pour ce mois : {(emp.sessions.length>0)?Sessionsbymonth(emp.sessions,relativedate.getMonth()):''}
                    <br />
                    Nombre de séances : {emp.sessions.length}
                    <br/>
                    code: {(emp.sessions.length>0)?(emp.sessions.filter(e=> e[0] ==='c').length):''}    ;conduite: {(emp.sessions.length>0)?emp.sessions.filter(e=>e[0]==='p').length:''}
                </Typography>
            </CardContent>
            <CardActions>
            <Link to={`/employes/edit/${emp.id}`} style={{textDecoration:'none'}}> <Button color="secondary" variant="contained" ><div style={{marginRight:'15%'}}>Modifier</div></Button></Link>
            </CardActions>
        </Card>
    );
}


export default EmployeeCard
