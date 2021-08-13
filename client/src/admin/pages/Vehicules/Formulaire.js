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
        marginLeft:240,
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
    page:{
        marginBottom: 50
    }
}));
const generateDefaultdate=(selectedDate)=>{
    if(!selectedDate) return
    const month=(String(selectedDate.getMonth()).length===1)?'0'+selectedDate.getMonth():selectedDate.getMonth()
    const day=(String(selectedDate.getDay()).length===1)?'0'+selectedDate.getDay():selectedDate.getDay()
    const hours=(String(selectedDate.getHours()).length===1)?'0'+selectedDate.getHours():selectedDate.getHours()
    const mins=(String(selectedDate.getMinutes()).length===1)?'0'+selectedDate.getMinutes():selectedDate.getMinutes()
    return (selectedDate.getFullYear()+'-'+ month+'-'+ day +'T'+hours+':'+mins)
}

const Formulaire = () => {
    const { id } = useParams()
    const [car, setcar] = useState({})
    const [modele, setmodele] = useState()
    const [marque, setmarque] = useState();
    const [value, setValue] = React.useState();
    const [selectedDate,setselectedDate]=React.useState()
    React.useEffect(() => {
        axios.get(`http://localhost:3001/api/admin/vehicule/${id}`,{headers:{
            "auth-token":localStorage.getItem('token')
        }}).then((result)=>{ setcar(result.data) 
                            setmodele(result.data.modele)
                            setmarque(result.data.marque)
                            setValue(result.data.etat)
                            setselectedDate(generateDefaultdate(new Date(result.data.dateEntretien)))})
        .catch((err)=>console.log(err))
    }, [])
    const classes = useStyles();
    const history = useHistory();

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
    const handleMarqueChange = (event) => {
        console.log(marque)
        setmarque(event.target.value);
    };
    const handleModeleChange = (event) => {
        setmodele(event.target.value)
    }
    React.useEffect(() => {
        var marqueinput = document.querySelector('#marque')
        var modeleinput = document.querySelector('#modele')
        console.log('h')
        marqueinput.value = marque
        modeleinput.value = modele
    }, [marque,modele])

    const handleSubmit = (event) => {
        event.preventDefault()
        history.push("/Vehicules");
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
                <form className={classes.container} noValidate>
                    {console.log(selectedDate)}
                    <TextField
                        id="datetime-local"
                        label="Date d'entretien"
                        type="datetime-local"
                        defaultValue={selectedDate}
                        className={classes.date}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </form>
                <div>
                    <FormControl className={classes.formControl} >
                        <InputLabel htmlFor="age-native-simple">Service</InputLabel>
                        <Select
                            native
                            value={state.Service}
                            onChange={handleClicked}
                            inputProps={{
                                name: 'Service',
                                id: 'age-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value={"En service"}>En service</option>
                            <option value={"Hors service"}>Hors service</option>
                        </Select>
                    </FormControl>
                </div>
                <div className={classes.entretien}>
                    <Box  component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend">Etat du véhicule</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div>
                <Button onSubmit={handleSubmit} href='/Vehicules' variant="contained" color="secondary" style={{ marginTop: '3%', width: '20%' }}>
                    <center style={{ marginRight: '10%' }} >Enregistrer</center>
                </Button>
            </form>
        </div>
    )
}
export default Formulaire