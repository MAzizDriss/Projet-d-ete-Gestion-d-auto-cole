import React from "react";
import './CSS/Welcome.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import service1 from './images/Conduite.jpg'
import service2 from './images/Code.jpg'
import service3 from './images/Test.jpg'

const useStyles = makeStyles((theme) => ({
    Grid: {
        flexGrow: 1,
        marginBottom:6,
    },
    paper: {
        height: 200,
        width: 800,
        marginLeft: 350,
        marginTop: 1,
        marginBottom: 9,
        backgroundColor: "#3a506b",
        display: "flex",
        flexDirection:'row'
    },
}));

export default function SpacingGrid() {
    const classes = useStyles();

    return (
        <div className="welcomePage">
            <h1 className="Title">Nos services</h1>
            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f2f2f2" }}>
                <Grid container className={classes.Grid}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <img src={service1} className="imgServiceD" />
                            <div>
                                <h2 className="ServiceTitle">Des séances de conduite</h2>
                                <p className="ServicesousTitle">Vous pouvez réservez et passez des heures de conduite avec nos experts de la route. </p>
                                <p className="ServicesousTitle">Toute les séances réalisés seront enregistrées sur votre profile.</p>
                                <h4 className="Tarif">Tarif: 20dt/h</h4>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container className={classes.Grid}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div>
                                <h2 className="ServiceTitle">Des séances de code</h2>
                                <p className="ServicesousTitle">Vous pouvez réservez des heures de code pour apprendre le code de la route parfaitement avec notre aide.</p>
                                <p className="ServicesousTitle">Toute les séances réalisés seront enregistrées sur votre profile.</p>
                                <h4 className="Tarif">Tarif: 10dt/h</h4>
                            </div>
                            <img src={service2} className="imgServiceG" />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid container className={classes.Grid}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        <img src={service3} className="imgServiceD" />
                            <div>
                                <h2 className="ServiceTitle">Un test gratuit pour s'entraîner</h2>
                                <p className="ServicesousTitle">Passez un test en ligne de 30 questions accompagné d'un minuteur.</p>
                                <p className="ServicesousTitle">A la fin du questionnaire, vous aurez votre score.</p>
                                <h4 className="Tarif">Tarif: gratuit</h4>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <h1>.............................................................................................</h1>
        </div>
    );
}
