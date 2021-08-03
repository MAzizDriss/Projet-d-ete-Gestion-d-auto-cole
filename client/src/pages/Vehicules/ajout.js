import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import vehicules from '../Data/CarData';
import './Vehicules.css'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
            marginTop: '2vh'
        },
        marginTop: '3vw',
        textAlign: 'center'

    },
    Rating: {
        marginLeft: 450,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
const Ajout = () => {
    const history = useHistory();
    const classes = useStyles();
    const [marque, setmarque] = React.useState('');
    const handleMarqueChange = (event) => {
        setmarque(event.target.value);
    };
    const [modele, setmodele] = React.useState('');
    const handleModeleChange = (event) => {
        setmodele(event.target.value);
    };
    const [serie, setserie] = React.useState(0);
    const handleSerieChange = (event) => {
        setserie(event.target.value);
    };
    const [etat, setetat] = React.useState(2);
    const handleEtatChange = (event) => {
        setetat(event.target.value);
    };
    const [selectedDateE, setSelectedDateE] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateEChange = (event) => {
        setSelectedDateE(event.target.value);
        console.log(selectedDateE)
    };
    const [selectedDateA, setSelectedDateA] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateAChange = (event) => {
        setSelectedDateA(event.target.value);
        console.log(selectedDateA)
    };
    const [service, setservice] = React.useState('Hors service')
    const [disponibilite, setdisponibilite] = React.useState('')
    const handleDisponibiliteChange = (event) => {
        setdisponibilite(event.target.value)
    };
    const [papier, setpapier] = React.useState('')
    const handlePapierChange = (event) => {
        setpapier(event.target.value)
    };

    function lastCar(data) {
        const last_id = data[data.length - 1].id
        console.log('last_id:')
        console.log(last_id)
        const last_ref = parseInt(last_id)
        console.log('last_ref:')
        console.log(last_ref)
        const current_id = last_ref + 1
        return current_id
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const vehicule = {
            id: lastCar(vehicules),
            marque: marque,
            modele: modele,
            serie: serie,
            service: service,
            disponibilite: disponibilite,
            etat: etat,
            DateEntretien: selectedDateE,
            DateAchat: selectedDateA,
            papier: papier,
        }

        vehicules.push(vehicule)
        history.push("/Vehicules");

    }
    return (
        <div className="pageAjout">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'un véhicule :</h1>
                <TextField id="marque" label="marque" onChange={handleMarqueChange} />
                <br />
                <TextField id="modele" label="modele" onChange={handleModeleChange} />
                <br />
                <TextField id="serie" label="serie" onChange={handleSerieChange} />
                <br />

                <Box className={classes.Rating} id="etat" label="etat" onChange={handleEtatChange} component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">Etat</Typography>
                    <Rating
                        name="simple-controlled"
                        value={etat}
                        onChange={(event, newValue) => {
                            setetat(newValue);
                        }}
                    />
                </Box>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="papier" label="papier" onChange={handlePapierChange}>Papier</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="papier"
                        value={papier}
                        onChange={handlePapierChange}
                    >
                        <MenuItem value={'Verifiees'}>Vérifiées</MenuItem>
                        <MenuItem value={'Non verifiees'}>Non vérifiées</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="disponibilite" label="disponibilite" onChange={handleDisponibiliteChange}>Disponibilité</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="disponibilite"
                        value={disponibilite}
                        onChange={handleDisponibiliteChange}
                    >
                        <MenuItem value={'Disponible'}>Disponible</MenuItem>
                        <MenuItem value={'Non disponible'}>Non disponible</MenuItem>
                    </Select>
                </FormControl>
                <br />

                <TextField
                    id="datetime-local"
                    label="Date D'achat"
                    type="datetime-local"
                    defaultValue="2020-01-07T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateAChange}
                />
                <br />
                <TextField
                    id="datetime-local"
                    label="Date D'entretien"
                    type="datetime-local"
                    defaultValue="2022-01-07T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateEChange}
                />
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>Ajouter</button>
            </form>
        </div>
    )
}
export default Ajout