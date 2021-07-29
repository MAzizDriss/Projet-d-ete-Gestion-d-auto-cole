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
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard({ session }) {
    const classes = useStyles();


    return (
        <Card className={classes.root} style={{ width: '30%' }}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {session.date.toString().substring(0, 21)}
                </Typography>
                <Typography variant="h5" component="h2">
                    {clients[session.client - 1].name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {session.ref}
                </Typography>
                <Typography variant="body2" component="p">
                    Teacher : {employee[session.employee - 1].name}
                </Typography>
                <Typography variant="body2" component="p">
                    Vehicule : {session.vehicule}
                </Typography>
            </CardContent>
        </Card>
    );
}