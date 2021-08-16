import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Vehicules.css'
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useHistory } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'


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
    const [selectedDateV, setSelectedDateV] = React.useState(new Date());
    const handleDateEChange = (event) => {
        setSelectedDateV(event.target.value);
    };
    const [selectedDateA, setSelectedDateA] = React.useState(new Date());
    const handleDateAChange = (event) => {
        setSelectedDateA(event.target.value);
        console.log(selectedDateA)
    };
    const [disponibilite, setdisponibilite] = React.useState('')
    const handleDisponibiliteChange = (event) => {
        setdisponibilite(event.target.value)
    };
    const [vig, setvig] = React.useState('')
    const handleVigChange = (event) => {
        setvig(event.target.value)
    };
    const [ass, setass] = React.useState('')
    const handleAssChange = (event) => {
        setass(event.target.value)
    };
    const [imageLink, setimageLink] = React.useState('')
    const handleLinkChange = (event) => {
        setimageLink(event.target.value)
    }
    const [epp, setepp] = React.useState();
    const handleEpPChange = (event) => {
        setepp(event.target.value);
    };
    const [epj, setepj] = React.useState();
    const handleEpJChange = (event) => {
        setepj(event.target.value);
    };
    const [egp, setegp] = React.useState();
    const handleEgPChange = (event) => {
        setegp(event.target.value);
    };
    const [egj, setegj] = React.useState();
    const handleEgJChange = (event) => {
        setegj(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        const vehicule = {
            marque: marque,
            modele: modele,
            serie: serie,
            disponibilite: disponibilite,
            etat: etat,
            visiteTech: selectedDateV,
            dateAchat: selectedDateA,
            vignettes:vig,
            assurances:ass,
            periodeP:parseInt(epp),
            periodeG:parseInt(egp),
            jourP:parseInt(epj),
            jourG:parseInt(egj),
        }
        if (imageLink!=='')vehicule.imageLink=imageLink
        console.log(vehicule)

        axios.post('http://localhost:3001/api/admin/vehicule/add', vehicule, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then(() => { history.push('/Vehicules'); })
            .catch((err) => console.log(err))


    }
    return (
        <div className="pageAjout">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'un véhicule :</h1>
                <TextField id="Marque" label="marque" onChange={handleMarqueChange} />
                <br />
                <TextField id="Modele" label="modele" onChange={handleModeleChange} />
                <br />
                <TextField id="Serie" label="serie" onChange={handleSerieChange} />
                <br />
                <TextField
                    id="datetime-local-Achat"
                    label="Date D'achat"
                    type="datetime-local"
                    defaultValue="2022-01-01T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateAChange}
                />
                <br />
                <TextField id="Link" label="imageLink" onChange={handleLinkChange} />
                <br />


                <Box className={classes.Rating} id="Etat" label="etat" onChange={handleEtatChange} component="fieldset" mb={3} borderColor="transparent">
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
                    <InputLabel id="vig" label="Vignettes" onChange={handleVigChange}>Vignettes</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="papier"
                        value={vig}
                        onChange={handleVigChange}
                    >
                        <MenuItem value={true}>Vérifiées</MenuItem>
                        <MenuItem value={false}>Non vérifiées</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="ass" label="Assurances" onChange={handleAssChange}>Assurances</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="papier"
                        value={ass}
                        onChange={handleAssChange}
                    >
                        <MenuItem value={true}>Vérifiées</MenuItem>
                        <MenuItem value={false}>Non vérifiées</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="Disponibilite" label="disponibilite" onChange={handleDisponibiliteChange}>Disponibilité</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="Disponibilite"
                        value={disponibilite}
                        onChange={handleDisponibiliteChange}
                    >
                        <MenuItem value={true}>Disponible</MenuItem>
                        <MenuItem value={false}>Non disponible</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <TextField id="E1" label="periode de petit entretien" onChange={handleEpPChange} />
                <br />
                <TextField id="E10" label="Jour de moins de petit entretien" onChange={handleEpJChange} />
                <br />
                <TextField id="E2" label="periode de grand entretien" onChange={handleEgPChange} />
                <br />
                <TextField id="E20" label="Jour de moins de grand entretien" onChange={handleEgJChange} />
                <br />

                <TextField
                    id="datetime-local-Entretien"
                    label="Date de visite technique"
                    type="datetime-local"
                    defaultValue="2022-01-01T10:30"
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