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
    const [errMarque, seterrMarque] = React.useState(false)
    const [errModele, seterrModele] = React.useState(false)
    const [errSerie, seterrSerie] = React.useState(false)
    const [errDA, seterrDA] = React.useState(false)
    const [ErrMessageDA, setErrMessageDA] = React.useState(false)
    const [errLink, seterrLink] = React.useState(false)
    const [errVignette, seterrVignette] = React.useState(false)
    const [errAssurance, seterrAssurance] = React.useState(false)
    const [errDispo, seterrDispo] = React.useState(false)
    const [errPPE, seterrPPE] = React.useState(false)
    const [errJPE, seterrJPE] = React.useState(false)
    const [errPGE, seterrPGE] = React.useState(false)
    const [errJGE, seterrJGE] = React.useState(false)
    const [ErrMessageDate, setErrMessageDate] = React.useState(false)
    const [errDate, seterrDate] = React.useState(false)
    const [marque, setmarque] = React.useState('');
    const handleMarqueChange = (event) => {
        setmarque(event.target.value);
        seterrMarque(false)
    };
    const [modele, setmodele] = React.useState('');
    const handleModeleChange = (event) => {
        setmodele(event.target.value);
        seterrModele(false)
    };
    const [serie, setserie] = React.useState(0);
    const handleSerieChange = (event) => {
        setserie(event.target.value);
        seterrSerie(false)
    };
    const [etat, setetat] = React.useState(2);
    const handleEtatChange = (event) => {
        setetat(event.target.value);
    };
    const [selectedDateV, setSelectedDateV] = React.useState(new Date());
    const handleDateEChange = (event) => {
        setSelectedDateV(event.target.value);
        setErrMessageDate(false)
    };
    const [selectedDateA, setSelectedDateA] = React.useState(new Date());
    const handleDateAChange = (event) => {
        setSelectedDateA(event.target.value);
        console.log(selectedDateA)
        setErrMessageDA(false)
    };
    const [disponibilite, setdisponibilite] = React.useState('')
    const handleDisponibiliteChange = (event) => {
        setdisponibilite(event.target.value)
        seterrDispo(false)
    };
    const [vig, setvig] = React.useState('')
    const handleVigChange = (event) => {
        setvig(event.target.value)
        seterrVignette(false)
    };
    const [ass, setass] = React.useState('')
    const handleAssChange = (event) => {
        setass(event.target.value)
        seterrAssurance(false)
    };
    const [imageLink, setimageLink] = React.useState('')
    const handleLinkChange = (event) => {
        setimageLink(event.target.value)
        seterrLink(false)
    }
    const [epp, setepp] = React.useState();
    const handleEpPChange = (event) => {
        setepp(event.target.value);
        seterrPPE(false)
    };
    const [epj, setepj] = React.useState();
    const handleEpJChange = (event) => {
        setepj(event.target.value);
        seterrJPE(false)
    };
    const [egp, setegp] = React.useState();
    const handleEgPChange = (event) => {
        setegp(event.target.value);
        seterrPGE(false)
    };
    const [egj, setegj] = React.useState();
    const handleEgJChange = (event) => {
        setegj(event.target.value);
        seterrJGE(false)
    };
    const handleSubmit = (event) => {
        event.preventDefault()
        var today = new Date();
        const date1 = selectedDateV.toString()
        const year = parseInt(date1.substring(0, 4), 10)
        const month = parseInt(date1.substring(6, 8))
        const day = parseInt(date1.substring(8, 11))
        const monthToday = today.getUTCMonth() + 1
        const compareY = today.getUTCFullYear() > year;
        console.log(compareY);
        const compareD = (today.getUTCDate() > day && (monthToday == month) && (today.getUTCFullYear() == year))
        console.log(compareD);
        const compareM = (monthToday > month && today.getUTCFullYear() == year);
        console.log(compareM);
        if (compareY) {
            seterrDate(true)
            setErrMessageDate("L'année choisie est dépassée")
        }

        if (compareM) {
            seterrDate(true)
            setErrMessageDate("Le mois choisi est dépassé")
        }

        if (compareD) {
            setErrMessageDate("Le jour choisi est dépassé")
            seterrDate(true)

        }

        const date2 = selectedDateA.toString()
        const year2 = parseInt(date2.substring(0, 4), 10)
        const month2 = parseInt(date2.substring(6, 8))
        const day2 = parseInt(date2.substring(8, 11))
        const compareYear = today.getUTCFullYear() > year2;
        console.log(compareYear);
        const compareDays = (today.getUTCDate() > day2 && (monthToday == month2) && (today.getUTCFullYear() == year2))
        console.log(compareDays);
        const compareMonths = (monthToday > month2 && today.getUTCFullYear() == year2);
        console.log(compareMonths);
        if (compareYear) {
            seterrDA(true)
            setErrMessageDA("L'année choisie est dépassée")
        }

        if (compareMonths) {
            seterrDA(true)
            setErrMessageDA("Le mois choisi est dépassé")
        }

        if (compareDays) {
            setErrMessageDA("Le jour choisi est dépassé")
            seterrDA(true)

        }

        if (!marque || !modele || !serie || !disponibilite || !vig || !ass || !epp || !egp || !epj || !egj) {
            alert('Rakez mlih aaych khoya')
            if (modele == '') {
                seterrModele(true)
            }
            if (!marque) {
                seterrMarque(true)
            }
            if (!serie) {
                seterrSerie(true)
            }
            if (!vig) {
                seterrVignette(true)
            }
            if (!ass) {
                seterrAssurance(true)
            }
            if (!disponibilite) {
                seterrDispo(true)
            }
            if (!epp) {
                seterrPPE(true)
            }
            if (!egp) {
                seterrPGE(true)
            }
            if (!epj) {
                seterrJPE(true)
            }
            if (!egj) {
                seterrJGE(true)
            }
            return
        }

        const vehicule = {
            marque: marque,
            modele: modele,
            serie: serie,
            disponibilite: disponibilite,
            etat: etat,
            visiteTech: selectedDateV,
            dateAchat: selectedDateA,
            vignettes: vig,
            assurances: ass,
            periodeP: parseInt(epp),
            periodeG: parseInt(egp),
            jourP: parseInt(epj),
            jourG: parseInt(egj),
        }
        if (imageLink !== '') vehicule.imageLink = imageLink
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
                {errMarque ?
                    <TextField error helperText="La marque du véhicule est obligatoire" id="Marque" label="marque" onChange={handleMarqueChange} />
                    :
                    <TextField id="Marque" label="marque" onChange={handleMarqueChange} />}
                <br />
                {errModele ?
                    <TextField error helperText="Le modele est obligatoire" id="Modele" label="modele" onChange={handleModeleChange} /> :
                    <TextField id="Modele" label="modele" onChange={handleModeleChange} />}
                <br />
                {errModele ?
                    <TextField error helperText="Le numéro de série du véhicule est obligatoire" id="Serie" label="serie" onChange={handleSerieChange} />
                    :
                    <TextField id="Serie" label="serie" onChange={handleSerieChange} />}
                <br />
                {errDA ?
                    <TextField
                        error
                        helperText={ErrMessageDA}
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
                    :
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
                    />}
                <br />
                {errLink ?
                    <TextField error helperText="Le lien de la photo est obligatoire" id="Link" label="imageLink" onChange={handleLinkChange} /> :
                    <TextField id="Link" label="imageLink" onChange={handleLinkChange} />}
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
                {errVignette ?
                    <FormControl className={classes.formControl}>
                        <InputLabel error helperText="L'état des vignettes est obligatoire" id="vig" label="Vignettes" onChange={handleVigChange}>Vignettes</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="papier"
                            value={vig}
                            onChange={handleVigChange}
                        >
                            <MenuItem value={true}>Vérifiées</MenuItem>
                            <MenuItem value={false}>Non vérifiées</MenuItem>
                        </Select>
                    </FormControl> :
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
                    </FormControl>}
                <br />
                {errAssurance ?
                    <FormControl className={classes.formControl}>
                        <InputLabel error helperText="L'état des assurances est obligatoire" id="ass" label="Assurances" onChange={handleAssChange}>Assurances</InputLabel>
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
                    :
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
                    </FormControl>}
                <br />
                {errDispo ?
                    <FormControl className={classes.formControl}>
                        <InputLabel error helperText="La disponibilité du véhicule est obligatoire" id="Disponibilite" label="disponibilite" onChange={handleDisponibiliteChange}>Disponibilité</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="Disponibilite"
                            value={disponibilite}
                            onChange={handleDisponibiliteChange}
                        >
                            <MenuItem value={true}>Disponible</MenuItem>
                            <MenuItem value={false}>Non disponible</MenuItem>
                        </Select>
                    </FormControl> :
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
                    </FormControl>}
                <br />
                {errPPE ?
                    <TextField error helperText="La période du petit entretien est obligatoire" id="E1" label="periode du petit entretien" onChange={handleEpPChange} />
                    :
                    <TextField id="E1" label="periode du petit entretien" onChange={handleEpPChange} />}
                <br />
                {errPGE ?
                    <TextField error helperText="Le jour de mois du petit entretien est obligatoire" id="E10" label="Jour de mois du petit entretien" onChange={handleEpJChange} />
                    :
                    <TextField id="E10" label="Jour de mois du petit entretien" onChange={handleEpJChange} />}
                <br />
                {errJPE ?
                    <TextField error helperText="La période de grand entretien est obligatoire" id="E2" label="periode de grand entretien" onChange={handleEgPChange} />
                    :
                    <TextField id="E2" label="periode de grand entretien" onChange={handleEgPChange} />}
                <br />
                {errJGE ?
                                <TextField error helperText="Le jour du grand entretien est obligatoire" id="E20" label="Jour de mois du grand entretien" onChange={handleEgJChange} />
:
                <TextField id="E20" label="Jour de mois du grand entretien" onChange={handleEgJChange} />}
                <br />
{errDate ?
    <TextField
    error
    helperText={ErrMessageDate}
                    id="datetime-local-Entretien"
                    label="Date de visite technique"
                    type="datetime-local"
                    defaultValue="2022-01-01T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateEChange}
                /> :
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
                />}
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>Ajouter</button>
            </form>
        </div>
    )
}
export default Ajout