import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import candidats from '../Data/ClientData';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '6vw',
        textAlign: 'center',
    },
}));
const Formulaire = () => {
    const { id } = useParams()
    const [candidat, setcandidat] = useState(candidats.find(c => c.id === parseInt(id)))
    const classes = useStyles();
    const history = useHistory();

    const [name, setname] = useState(candidat.name);
    const handleNameChange = (event) => {
        setname(event.target.value);
    };
    const [payement, setpayement] = useState(candidat.payement)
    const handlePayementChange = (event) => {
        setpayement(event.target.value)
    }
    React.useEffect(() => {
        var nameinput = document.querySelector('#name')
        var payementinput = document.querySelector('#payement')

        nameinput.value = name
        payementinput.value = payement

        setname(candidat.name)
        setpayement(candidat.payement)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        candidat.name = candidats.find(c => c.name == name) ? candidats.find(c => c.name == name) : 0
        candidat.payement = candidats.find(c => c.insciprtionDate == payement) ? candidats.find(c => c.insciprtionDate == payement) : 0
        history.push("/Candidats");
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modifier les données de {candidat.name} :</h1>
                <br/><br/><br/><br/><br></br><br/>
                <TextField id="name" label="Nom du candidat" onChange={handleNameChange} />
                <br />
                <TextField id="payement" label="Payement" onChange={handlePayementChange} />
                <br />
                <Button onSubmit={handleSubmit} href='/Candidats' variant="contained" color="secondary" style={{marginTop:'3%',width:'20%'}}>
         <center style={{marginRight:'10%'}} >Enregistrer</center>
        </Button>
            </form>
        </div>
    )
}
export default Formulaire