import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import sessions from '../Data/SessionsData';
import clients from '../Data/ClientData';
import employee from '../Data/Employee';



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '4vw',
        textAlign: 'center'
    },
}));
const AddSession = () => {
    const classes = useStyles();
    const [type, settype] = React.useState('c');
    const handleTypeChange = (event) => {
        settype(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log(selectedDate)
    };
    const [client, setclient] = React.useState('')
    const handleClientChange = (event) => {
        setclient(event.target.value)
    }
    const [emp, setemp] = React.useState('')
    const handleEmpChange = (event) => {
        setemp(event.target.value)
    }
    const [veh, setveh] = React.useState(0)
    const handleVehChange = (event) => {
        setveh(event.target.value)
    }
    function createRef(data) {
        const last_ref = data[data.length - 1].ref
        console.log('last_ref:')
        console.log(last_ref)
        const last_ref_id = parseInt(last_ref.substring(1, last_ref.length))
        console.log('last_ref_id:')
        console.log(last_ref_id)
        const current_id = last_ref_id + 1
        const ref = type + String(current_id)
        return ref
    }
    const handleSubmit = (event) => {
        console.log('this is')
        console.log()
        event.preventDefault()
        const verif_client = clients.find(c => c.name === client) //:o
        const verif_employee = employee.find(e => e.name === emp)
        // const verif_date = selectedDate > new Date()
        if (!verif_client || !verif_employee) {
            alert('Rakez mlih aaych khoya')
            return
        }
        const session = {
            ref: createRef(sessions),
            client: clients.find(c => c.name == client) ? clients.find(c => c.name == client).id : 0,
            date: selectedDate,
            employee: employee.find(e => e.name == emp) ? employee.find(e => e.name == emp).id : 0,

        }
        if (type === 'p') {
            session.vehicule = veh
        }
        console.log(session)
        sessions.push(session)
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'une séance:</h1>
                <TextField id="Client" label="Client" onChange={handleClientChange} />
                <br />
                <TextField id="Employee" label="Employee" onChange={handleEmpChange} />
                <br />
                {(type == 'p') ? <>
                    <TextField id="Vehicule" label="Vehicule" onChange={handleVehChange} /><br /> </> : ''}
                    <TextField
                        id="datetime-local"
                        label="Date De la séance"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleDateChange}
                    />
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
