import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import candidats from '../Data/ClientData';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '4vw',
        marginBottom: '19.6vh',
        textAlign: 'center'
    },
}));
const Formulaire = () => {
    const { id } = useParams()
    const [candidat, setcandidat] = useState({})
    const [name, setname] = useState('');
    const [payement, setpayement] = useState('')
    const classes = useStyles();
    const history = useHistory();
    React.useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/client/${id}`, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            setcandidat(result.data)
            console.log(result.data)
            setname(result.data.name)
            setpayement(result.data.payment)
        }
        )
            .catch((err) => console.log(err))
    }, [])
    const handleNameChange = (event) => {
        setname(event.target.value);
    };
    const handleSwitchChange = (event) => {
        setpayement((event.target.value === 'true'))
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const info = {
            name: name,
            payment: payement
        }
        axios.put(`http://localhost:3001/api/admin/client/${id}`, info,{headers: {
            "auth-token": localStorage.getItem('token')
        } })
            .then(() => { console.log(info)
                        history.push('/candidats')}
            ).catch(err => console.log(err))

    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modifier les données  :</h1>
                <br /><br /><br /><br /><br></br><br />
                <TextField id="name" label="Nom du candidat" onChange={handleNameChange} value={name} />
                <br />
                <br />
                <FormControl component="fieldset">
                    <FormLabel component="legend" >Paiement:</FormLabel>
                    <br />
                    <RadioGroup aria-label="gender" id='type' name="paiement" value={payement} onChange={handleSwitchChange}>
                        <FormControlLabel value={true} control={<Radio />} label="Oui" />
                        <FormControlLabel value={false} control={<Radio />} label="Non" />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <button onSubmit={handleSubmit} variant="contained" color="secondary" style={{ marginTop: '3%', width: '20%' }}>
                    <center style={{ marginRight: '10%' }} >Enregistrer</center>
                </button>
            </form>
        </div>
    )
}
export default Formulaire