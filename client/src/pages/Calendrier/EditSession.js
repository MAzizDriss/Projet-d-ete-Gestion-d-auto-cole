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
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';

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
const EditSession = () => {
    const { ref } = useParams()
    const [session, setsession] = React.useState(sessions.find(s=>s.ref===ref))
    const classes = useStyles();
    const [type, settype] = React.useState(session.ref[0]);
    const handleTypeChange = (event) => {
        settype(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(session.date);
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const [client, setclient] = React.useState(clients[session.client -1].name)
    const handleClientChange = (event) => {
        setclient(event.target.value)
    }
    const [emp, setemp] = React.useState(employee[session.employee -1].name)
    const handleEmpChange = (event) => {
        setemp(event.target.value)
    }
    const [veh, setveh] = React.useState((session.vehicule)?session.vehicule:0)
    const handleVehChange = (event) => {
        setveh(event.target.value)
    }
    React.useEffect(() => {
      var clientinput=document.querySelector('#Client')
      var empinput=document.querySelector('#Employee')
      var dateinput=document.querySelector('#datetime-local')
      var typeinput=document.querySelector('#type')

      clientinput.value=client
      empinput.value=emp
      typeinput.value=type

      setemp(employee[session.employee -1].name)
      setSelectedDate(session.date)
      settype(session.ref[0])
      if(type==='p'){
          var vehinput=document.querySelector('#Vehicule')
          setveh(session.vehicule)
          vehinput.value=veh
      }
    }, [])
    const handleDelete = ()=>{
        alert("deleted")
        sessions.splice(sessions.indexOf(sessions.find(s=>s.ref===ref),1))

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const verif_client = clients.find(c => c.name === client) //:o
        const verif_employee = employee.find(e => e.name === emp)
        // const verif_date = selectedDate > new Date()
        if (!verif_client || !verif_employee) {
            alert('Rakez mlih aaych khoya')
            return
        }

            session.client=clients.find(c => c.name === client) ? clients.find(c => c.name === client).id : 0
            session.date= selectedDate
            session.employee= employee.find(e => e.name === emp) ? employee.find(e => e.name === emp).id : 0

        if (type === 'p') {
            session.vehicule = veh
            session.ref='p'+session.ref.substring(1,session.ref.length)
        }
        if(type==='c'){
            session.ref='c'+session.ref.substring(1,session.ref.length)
            if (session.veh)
            delete session[veh]
        }
        console.log(session)
        alert('Saved the new info <3')
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modification d'une séance:</h1>
                <TextField id="Client" label="Client" onChange={handleClientChange} />
                <br />
                <TextField id="Employee" label="Employee" onChange={handleEmpChange} />
                <br />
                {(type === 'p') ? <>
                    <TextField id="Vehicule" label="Vehicule" onChange={handleVehChange} /><br /> </> : ''}
                <TextField
                    id="datetime-local"
                    label="Date De la séance"
                    type="datetime-local"
                    defaultValue="2021-08-01T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateChange}
                />
                <br />
                <FormControl component="fieldset">
                    <FormLabel component="legend" >Type de séance:</FormLabel>
                    <RadioGroup aria-label="gender" id='type' name="gender1" value={type} onChange={handleTypeChange}>
                        <FormControlLabel value="c" control={<Radio />} label="Code" />
                        <FormControlLabel value="p" control={<Radio />} label="Conduite" />
                    </RadioGroup>
                </FormControl>
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit} >Enregistrer</button>
            </form>
            <Button color="secondary" variant="contained" style={{marginLeft:'60%'}}><div style={{marginRight:'15%'}} onClick={handleDelete}>supprimer</div></Button>

        </div>
    )
}
//e
export default EditSession
