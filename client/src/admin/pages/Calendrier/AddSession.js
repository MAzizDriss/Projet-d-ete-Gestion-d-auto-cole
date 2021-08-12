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

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '4vw',
        textAlign: 'center',
        marginBottom:'20vh'
    },
}));
const AddSession = () => {
    const classes = useStyles();
    const history = useHistory();
    const [type, settype] = React.useState('c');
    const handleTypeChange = (event) => {
        settype(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
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
    const [sessions,setsessions]=React.useState([{}])
    const [clients,setclients]=React.useState([{}])
    const [employees,setemployees]=React.useState([{}])
    React.useEffect(() => {
        axios.get('http://localhost:3001/api/admin/session/sessions',{headers:{
            "auth-token":localStorage.getItem('token')
        }}).then((result)=>{ setsessions(result.data) })
        .catch((err)=>console.log(err))
        axios.get('http://localhost:3001/api/admin/clients',{headers:{
            "auth-token":localStorage.getItem('token')
        }}).then((result)=>{ setclients(result.data) })
        .catch((err)=>console.log(err))
        axios.get('http://localhost:3001/api/admin/employee/employees',{headers:{
            "auth-token":localStorage.getItem('token')
        }}).then((result)=>{ setemployees(result.data) })
        .catch((err)=>console.log(err))
    }, [])
    function createRef(data) {
        const last_ref = data[data.length - 1].ref
        const last_ref_id = parseInt(last_ref.substring(1, last_ref.length))
        const current_id = last_ref_id + 1
        const ref = type + String(current_id)
        return ref
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const verif_client = clients.find(c => c.name === client) //:o
        const verif_employee = employees.find(e => e.name === emp)
        // const verif_date = selectedDate > new Date()
        if (!verif_client || !verif_employee) {
            alert('Rakez mlih aaych khoya')
            return
        }
        const session = {
            ref: createRef(sessions),
            clientId: clients.find(c => c.name === client) ? clients.find(c => c.name === client).id : 0,
            date: selectedDate,
            employeeId: employees.find(e => e.name === emp) ? employees.find(e => e.name === emp).id : 0,

        }
        if (type === 'p') {
            session.vehiculeId = veh
        }
        console.log(session)
        var clientvalue = document.querySelector('#Client')
        var empvalue=document.querySelector('#Employee')
        clientvalue.value=''
        empvalue.value=''
        setclient('')
        setemp('')
        axios.post('http://localhost:3001/api/admin/session/add',session,{headers:{
            "auth-token":localStorage.getItem('token')
        }}).then(()=>history.push('/Calendrier'))
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'une séance:</h1>
                <TextField id="Client" label="Client" onChange={handleClientChange}/>
                <br />
                <TextField id="Employee" label="Employee" onChange={handleEmpChange} />
                <br />
                {(type === 'p') ? <>
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
                    <br/>
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
