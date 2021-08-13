import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import cars from '../Data/CarData';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '6vw',
        textAlign: 'center',
    },
    entretien: {
        marginLeft: 240,
        marginTop: 30
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 210,
        left: 264
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    date: {
        left: 265
    },
    page: {
        marginBottom: 50
    }
}));


const Formulaire = () => {
    const { id } = useParams()
    const [service, setservice] = useState()
    const [car, setcar] = useState({})
    const [modele, setmodele] = useState()
    const [marque, setmarque] = useState();
    const [value, setValue] = React.useState();
    const [selectedDate, setselectedDate] = React.useState()
    React.useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/vehicule/${id}`, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            setcar(result.data)
            setmodele(result.data.modele)
            setmarque(result.data.marque)
            setValue(result.data.etat)
            setservice(result.data.service)
            setselectedDate(result.data.dateEntretien.substring(0, 16))
        })
            .catch((err) => console.log(err))
    }, [])
    const classes = useStyles();
    const history = useHistory();

    const [state, setState] = React.useState({
        Service: '',
    });

    const handleClicked = (event) => {
        setservice(event.target.value === 'true')
    };
    const handleMarqueChange = (event) => {
        setmarque(event.target.value);
    };
    const handleModeleChange = (event) => {
        setmodele(event.target.value)
    }
    const handleDateChange = (event) => {
        setselectedDate(event.target.value)
    }
    React.useEffect(() => {
        var marqueinput = document.querySelector('#marque')
        var modeleinput = document.querySelector('#modele')
        var servicestate = document.querySelector('#Service')
        marqueinput.value = marque
        modeleinput.value = modele
    }, [marque, modele, service])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            marque: marque,
            modele: modele,
            etat: value,
            dateEntretien: selectedDate,
            service: service
        }
        axios.put(`http://localhost:3001/api/admin/vehicule/${id}`, data, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            console.log(result)
            history.push('/vehicules');
        })
            .catch((err) => console.log(err))
    }
    const handleDelete = ()=>{
        axios.delete(`http://localhost:3001/api/admin/vehicule/${id}`, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            console.log(result)
            history.push('/vehicules');
        })
            .catch((err) => console.log(err))
    }
    return (
        <div className={classes.page}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modifier les données de {marque} {modele} :</h1>
                <br /><br /><br />
                <TextField id="marque" label="Nom du candidat" onChange={handleMarqueChange} />
                <br />
                <TextField id="modele" label="Payement" onChange={handleModeleChange} />
                <br />
                {selectedDate ? <form className={classes.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Date d'entretien"
                        type="datetime-local"
                        defaultValue={selectedDate}
                        className={classes.date}
                        onChange={handleDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form> : ''}
{             value?   <div>
                    <FormControl className={classes.formControl} >
                        <InputLabel >Service</InputLabel>
                        <Select
                            value={service}
                            native
                            id='Service'
                            onChange={handleClicked}
                        >
                            <option value={true}>En service</option>
                            <option value={false}>Hors service</option>
                        </Select>
                    </FormControl>
                </div>:''}
                {value ? <div className={classes.entretien}>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Etat du véhicule</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div> : ''}
                <button variant="contained" color="secondary" style={{ marginTop: '3%', width: '20%' }}>
                    <center style={{ marginRight: '10%' }} >Enregistrer</center>
                </button>
            </form>
            <center><button variant="contained" color="secondary" style={{ marginTop: '3%', width: '20%' }} onClick={handleDelete}>
                    <center style={{ marginRight: '10%' }} >Supprimer</center>
                </button></center>
        </div>
    )
}
export default Formulaire