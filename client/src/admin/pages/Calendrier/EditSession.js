import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { useParams } from 'react-router-dom';
import { Button } from '@material-ui/core';
import axios from 'axios'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        marginTop: '4vw',
        textAlign: 'center',
        marginBottom: '19vh'
    },
}));
const generateDefaultdate=(selectedDate)=>{
    const month=(String(selectedDate.getMonth()).length===1)?'0'+selectedDate.getMonth():selectedDate.getMonth()
    const day=(String(selectedDate.getDay()).length===1)?'0'+selectedDate.getDay():selectedDate.getDay()
    const hours=(String(selectedDate.getHours()).length===1)?'0'+selectedDate.getHours():selectedDate.getHours()
    const mins=(String(selectedDate.getMinutes()).length===1)?'0'+selectedDate.getMinutes():selectedDate.getMinutes()
    return (selectedDate.getFullYear()+'-'+ month+'-'+ day +'T'+hours+':'+mins)

}

const EditSession = () => {
    const { ref } = useParams()
    const history = useHistory();
    const [session, setsession] = React.useState()
    const [sessions, setsessions] = React.useState([{}])
    const [clients, setclients] = React.useState()
    const [employees, setemployees] = React.useState()
    React.useEffect(() => {
        console.log('fired')
        axios.get(`http://localhost:3001/api/admin/session/sessions`, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            setsessions(result.data);
            const sess=result.data.find(s => s.ref === ref)
            setsession(result.data.find(s => s.ref === ref))

        })
            .catch((err) => console.log(err))
        axios.get('http://localhost:3001/api/admin/clients', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => { setclients(result.data)})
            .catch((err) => console.log(err))
        axios.get('http://localhost:3001/api/admin/employee/employees', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => { setemployees(result.data) })
            .catch((err) => console.log(err))
    }, [])
    const classes = useStyles();
    const [type, settype] = React.useState('c');

    const handleTypeChange = (event) => {
        settype(event.target.value);
    };
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const [client, setclient] = React.useState({})
    const handleClientChange = (event) => {
        setclient(event.target.value)
    }
    const [emp, setemp] = React.useState({})
    const handleEmpChange = (event) => {
        setemp(event.target.value)
    }
    const [veh, setveh] = React.useState(0)
    const handleVehChange = (event) => {
        setveh(event.target.value)
    }
    React.useEffect(() => {
        console.log('update')
       
        setSelectedDate(session?new Date(session.date):new Date())
        settype(session?session.ref[0]:'c')
        if (session){
        if(clients)setclient(clients[session.clientId -1].name)
        if (employees)setemp(employees[session.employeeId - 1].name)
        }
        setveh(session ? session.vehicule : 0)
        if (type === 'p') {
            var vehinput = document.querySelector('#Vehicule')
            setveh(session.vehiculeId)
            vehinput.value = veh
        }

    }, [session,clients,employees])

    const handleDelete = () => {
        axios.delete(`http://localhost:3001/api/admin/session/${ref}`, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {console.log(result)
        })
        alert("deleted")
        history.push('/Calendrier')

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const verif_client = clients.find(c => c.name === client) //:o
        const verif_employee = employees.find(e => e.name === emp)
        if (!verif_client || !verif_employee  ) {
            alert('Rakez mlih aaych khoya')
            return
        }
        const sess= {
            clientId: clients.find(c => c.name === client).id ,
            date:selectedDate,
            employeeId:employees.find(e => e.name === emp).id
        }

        if (type === 'p') {
            sess.vehiculeId = veh
            sess.ref = 'p' + session.ref.substring(1, session.ref.length)
        }
        if (type === 'c') {
            sess.ref = 'c' + session.ref.substring(1, session.ref.length)
            if (session.veh)
                delete session[veh]
        }
        axios.put(`http://localhost:3001/api/admin/session/${ref}`, sess, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then(() => {
            history.push('/Calendrier')
            alert('Saved the new info <3')
        })

    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modification d'une séance:</h1>
                <TextField id="Client" label="Client" onChange={handleClientChange} value={client} />
                <br />
                <TextField id="Employee" label="Employee" onChange={handleEmpChange} value={emp} />
                <br />
                {(type === 'p') ? <>
                    <TextField id="Vehicule" label="Vehicule" onChange={handleVehChange} value={veh} /><br /> </> : ''}
                <TextField
                    id="datetime-local"
                    label="Date De la séance"
                    type="datetime-local"
                    defaultValue={session?generateDefaultdate(new Date(selectedDate)):generateDefaultdate(new Date())}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateChange}
                />
                <br />
                <FormControl component="fieldset">
                    <FormLabel style={{ marginLeft: "-33vh" }} component="legend" >Type de séance:</FormLabel>
                    <RadioGroup aria-label="gender" id='type' name="gender1" value={type} onChange={handleTypeChange}>
                        <FormControlLabel value="c" control={<Radio />} label="Code" />
                        <FormControlLabel value="p" control={<Radio />} label="Conduite" />
                    </RadioGroup>
                </FormControl>
                <br />
                <div style={{ display: "flex", direction: "column", marginLeft: "65vh" }}>
                    <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit} >Enregistrer</button>
                    <Button color="secondary" variant="contained" style={{ marginLeft: '1%', width: '15vw' }}><div style={{ marginRight: '15%' }} onClick={handleDelete}>supprimer</div></Button>
                </div>
            </form>

        </div>
    )
}
//e
export default EditSession
