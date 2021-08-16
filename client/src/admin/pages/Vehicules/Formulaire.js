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
import { HiViewGrid } from 'react-icons/hi';


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
    const [disp, setdisp] = useState()
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
            setdisp(result.data.disponibilite)
            setepp(result.data.entretienP.periode)
            setepj(result.data.entretienP.jour)
            setegp(result.data.entretienG.periode)
            setegj(result.data.entretienG.jour)
            setass(result.data.papiers.assurances)
            setvig(result.data.papiers.vignettes)
            setcar(result.data)
            setmodele(result.data.modele)
            setmarque(result.data.marque)
            setValue(result.data.etat)
            setselectedDate(result.data.visiteTech.substring(0, 16))
        })
            .catch((err) => console.log(err))
    }, [])
    const classes = useStyles();
    const history = useHistory();



    const handleClicked = (event) => {
        setdisp(event.target.value === 'true')
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
    const [epp, setepp] = React.useState('');
    const handleEpPChange = (event) => {
        setepp(event.target.value);
    };
    const [epj, setepj] = React.useState('');
    const handleEpJChange = (event) => {
        setepj(event.target.value);
    };
    const [egp, setegp] = React.useState('');
    const handleEgPChange = (event) => {
        setegp(event.target.value);
    };
    const [egj, setegj] = React.useState('');
    const handleEgJChange = (event) => {
        setegj(event.target.value==='true');
    };
    const [vig, setvig] = React.useState('')
    const handleVigChange = (event) => {
        setvig(event.target.value)
    };
    const [ass, setass] = React.useState('')
    const handleAssChange = (event) => {
        setass(event.target.value==='true')
    };
    React.useEffect(() => {
        var marqueinput = document.querySelector('#marque')
        var modeleinput = document.querySelector('#modele')
        var eppinput = document.querySelector('#E1')
        var epjinput = document.querySelector('#E10')
        var egpinput = document.querySelector('#E2')
        var egjinput = document.querySelector('#E20')
        
        marqueinput.value = marque
        modeleinput.value = modele
        eppinput.value = epp + ' '
        epjinput.value = epj + ' '
        egpinput.value = egp + ' '
        egjinput.value = egj + ' '
    }, [marque, modele, disp,epp,epj,egp,egj])

    const handleSubmit = (event) => {
        event.preventDefault()
        const data = {
            marque: marque,
            modele: modele,
            etat: value,
            visiteTech: selectedDate,
            disponibilite: disp,
            vignettes: vig,
            assurances: ass,
            periodeP: parseInt(epp),
            periodeG: parseInt(egp),
            jourP: parseInt(epj),
            jourG: parseInt(egj),
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
    const handleDelete = () => {
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
            {console.log(epj)}
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modifier les données de {marque} {modele} :</h1>
                <br /><br /><br />
                <TextField id="marque" label="Nom du candidat" onChange={handleMarqueChange} />
                <br />
                <TextField id="modele" label="Payement" onChange={handleModeleChange} />
                <br />
                <TextField  id="E1" label="periode de petit entretien" onChange={handleEpPChange} />
                <br />
                <TextField id="E10" label="Jour de moins de petit entretien" onChange={handleEpJChange} />
                <br />
                <TextField id="E2" label="periode de grand entretien" onChange={handleEgPChange} />
                <br />
                <TextField id="E20" label="Jour de moins de grand entretien" onChange={handleEgJChange} />
                <br />
                {value ? <div>
                    <FormControl className={classes.formControl} >
                        <InputLabel >Disponabilte</InputLabel>
                        <Select
                            value={disp}
                            native
                            id='Disp'
                            onChange={handleClicked}
                        >
                            <option value={true}>Disponible</option>
                            <option value={false}>Non Disponible</option>
                        </Select>
                    </FormControl>

                </div> : ''}
                {value? <div>
                    <FormControl className={classes.formControl} >
                        <InputLabel >Vignettes</InputLabel>
                        <Select
                            value={vig}
                            native
                            id='Disp'
                            onChange={handleVigChange}
                        >
                            <option value={true}>Vérifiées</option>
                            <option value={false}>Non Vérifiées</option>
                        </Select>
                    </FormControl>

                </div> : ''}
                {value? <div>
                    <FormControl className={classes.formControl} >
                        <InputLabel >Assurances</InputLabel>
                        <Select
                            value={ass}
                            native
                            id='Disp'
                            onChange={handleAssChange}
                        >
                            <option value={true}>Vérifiées</option>
                            <option value={false}>Non Vérifiées</option>
                        </Select>
                    </FormControl>

                </div> : ''}
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
                {selectedDate ? <form className={classes.container} noValidate>
                    <TextField
                        id="datetime-local"
                        label="Date de visite technique"
                        type="datetime-local"
                        defaultValue={selectedDate}
                        className={classes.date}
                        onChange={handleDateChange}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <br />

                </form>
                    : ''}
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