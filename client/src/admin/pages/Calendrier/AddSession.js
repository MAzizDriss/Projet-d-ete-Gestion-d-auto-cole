import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import axios from 'axios';
import { useHistory } from 'react-router';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '4vw',
        textAlign: 'center',
        marginBottom: '20vh'
    },
}));
const AddSession = () => {
    const classes = useStyles();
    const [ErrMessage, setErrMessage] = React.useState("")
    const [errC, seterrC] = React.useState(false)
    const [errE, seterrE] = React.useState(false)
    const [errV, seterrV] = React.useState(false)
    const [errDate, seterrDate] = React.useState(false)
    const history = useHistory();
    const [type, settype] = React.useState('c');
    const handleTypeChange = (event) => {
        settype(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        seterrDate(false)
    };
    const [client, setclient] = React.useState('')
    const handleClientChange = (event) => {
        setclient(event.target.value)
        seterrC(false)
    }
    const [emp, setemp] = React.useState('')
    const handleEmpChange = (event) => {
        setemp(event.target.value)
        seterrE(false)
    }
    const [veh, setveh] = React.useState(0)
    const handleVehChange = (event) => {
        setveh(event.target.value)
        seterrV(false)
    }
    const [exam, setexam] = React.useState(false)
    const handleExamChange = (event) => { setexam(event.target.value) }

    const [sessions, setsessions] = React.useState([{}])
    const [clients, setclients] = React.useState([{}])
    const [employees, setemployees] = React.useState([{}])
    const [vehicules, setvehicules] = React.useState()
    React.useEffect(() => {
        axios.get('http://localhost:3001/api/admin/session/sessions', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => { setsessions(result.data) })
            .catch((err) => console.log(err))
        axios.get('http://localhost:3001/api/admin/clients', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => { setclients(result.data) })
            .catch((err) => console.log(err))
        axios.get('http://localhost:3001/api/admin/employee/employees', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => { setemployees(result.data) })
            .catch((err) => console.log(err))
        axios.get('http://localhost:3001/api/admin/vehicule/vehicules', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => { setvehicules(result.data) })
            .catch((err) => console.log(err))
    }, [])
    function createRef(data) {
        const last_ref = data[data.length - 1].ref
        const last_ref_id = parseInt(last_ref.substring(1, last_ref.length))
        const current_id = last_ref_id + 1
        if (!exam) { return type + String(current_id) }
        else {
            if (type === 'c') return 'f' + String(current_id)
            if (type === 'p') return 'e' + String(current_id)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        var today = new Date();
        const date = selectedDate.toString()
        const year = parseInt(date.substring(0, 4), 10)
        const month = parseInt(date.substring(6, 8))
        const day = parseInt(date.substring(8, 11))
        const monthToday = today.getUTCMonth() + 1
        const compareY = today.getUTCFullYear() > year;
        console.log(compareY);
        const compareD = (today.getUTCDate() > day && (monthToday == month) && (today.getUTCFullYear() == year))
        console.log(compareD);
        const compareM = (monthToday > month && today.getUTCFullYear() == year);
        console.log(compareM);
        if (compareY) {
            seterrDate(true)
            setErrMessage("L'année choisie est dépassée")
        }

        if (compareM) {
            seterrDate(true)
            setErrMessage("Le mois choisi est dépassé")
        }

        if (compareD) {
            setErrMessage("Le jour choisi est dépassé")
            seterrDate(true)

        }



        if (!client) {
            alert('Rakez mlih aaych khoya')
            if (client == '') {
                seterrC(true)
            }
            return
        }

        const session = {
            ref: createRef(sessions),
            clientId: client,
            date: selectedDate,
            employeeId: emp,
        }
        if (type === 'p') {
            session.vehiculeId = veh
        }
        if (session.ref[0] === 'f') {
            delete session.employeeId
        }
        axios.post('http://localhost:3001/api/admin/session/add', session, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then(() => history.push('/Calendrier'))
            .catch((err) => console.log(err))
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'une séance:</h1>
                {errC ? <FormControl className={classes.formControl}>
                    <InputLabel error id="Client" helperText="Le nom du client est obligatoire" label="Client" onChange={handleClientChange}>Client</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="papier"
                        value={client}
                        onChange={handleClientChange}
                    >
                        {clients.map(client =>
                            <MenuItem key={client.id} value={client.id}>{client.name}</MenuItem>
                        )}
                    </Select>
                </FormControl> :
                    <>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="Client" label="Client" onChange={handleClientChange}>Client</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="papier"
                                value={client}
                                onChange={handleClientChange}
                            >
                                {clients.filter(client=>client.finished===false).map(client =>
                                    <MenuItem key={client.id} value={client.id}>{client.name}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                    </>
                }
                <br />
                {errE ?
                    <FormControl className={classes.formControl}>
                        <InputLabel error helperText="Le nom de l'employé est obligatoire" id="Employé" label="Employé" onChange={handleEmpChange}>Employé</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="papier"
                            value={emp}
                            onChange={handleEmpChange}
                        >
                            {employees.map(employee =>
                                <MenuItem key={employee.id} value={employee.id}>{employee.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>

                    :

                    <>  {!(exam && type === 'c') && <FormControl className={classes.formControl}>
                        <InputLabel id="Employé" label="Employé" onChange={handleEmpChange}>Employé</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="papier"
                            value={emp}
                            onChange={handleEmpChange}
                        >
                            {employees.map(employee =>
                                <MenuItem key={employee.id} value={employee.id}>{employee.name}</MenuItem>
                            )}
                        </Select>
                    </FormControl>}</>}
                <br />
                {(type === 'p') ? <>
                    {errV ?

                        <FormControl className={classes.formControl}>
                            <InputLabel error helperText="Le véhicule utilisé est obligatoire" id="veh" label="Vehicule" onChange={handleVehChange}>Vehicule</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="papier"
                                value={veh}
                                onChange={handleVehChange}
                            >
                                {vehicules.filter(v => v.service === true).map(vehicule =>
                                    <MenuItem key={vehicule.id} value={vehicule.id}>{vehicule.marque} {vehicule.modele}</MenuItem>
                                )}
                            </Select>
                        </FormControl>
                        :

                        <FormControl className={classes.formControl}>
                            <InputLabel id="veh" label="Vehicule" onChange={handleVehChange}>Vehicule</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="papier"
                                value={veh}
                                onChange={handleVehChange}
                            >
                                {vehicules.filter(v => v.service === true).map(vehicule =>
                                    <MenuItem key={vehicule.id} value={vehicule.id}>{vehicule.marque} {vehicule.modele}</MenuItem>
                                )}
                            </Select>
                        </FormControl>}
                    <br />
                </> : ''}
                <FormControl className={classes.formControl} >
                    <InputLabel >Nature de séance:</InputLabel>
                    <Select
                        value={exam}
                        labelId="demo-simple-select-label"
                        id='e'
                        onChange={handleExamChange}
                    >
                        <MenuItem value={false}>Séance Normale</MenuItem>
                        <MenuItem value={true}>Examen</MenuItem>
                    </Select>

                </FormControl>
                <br />
                {errDate ?
                    <TextField error
                        id="datetime-local"
                        label="Date De la séance"
                        type="datetime-local"
                        defaultValue={"2021-05-24T10:30"}
                        helperText={ErrMessage}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDateChange}
                    />
                    :
                    <TextField
                        id="datetime-local"
                        label="Date De la séance"
                        type="datetime-local"
                        defaultValue={"2021-05-24T10:30"}
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDateChange}
                    />}
                <br />
                <FormControl component="fieldset">
                    <FormLabel component="legend" >Type de séance:</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={type} onChange={handleTypeChange}>
                        <FormControlLabel value="c" control={<Radio />} label="Code" />
                        <FormControlLabel value="p" control={<Radio />} label="Conduite" />
                    </RadioGroup>
                </FormControl>
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>Ajouter</button>
            </form>

        </div>
    )
}
//e
export default AddSession
