import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
const AddEmployee = () => {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        console.log(selectedDate)
    };
    const [name, setname] = React.useState('')
    const handleNameChange = (event) => {
        setname(event.target.value)
    }
    const [salaire, setsalaire] = React.useState(200)
    const handleSalaireChange = (event) => {
        setsalaire(event.target.value)
    }
    console.log(typeof('asss'))
    console.log(typeof(salaire))
    const handleSubmit = (event) => {
        event.preventDefault()
        //verification
        const emp = {
            id: employee.length + 1,
            name: name,
            sessions: [],
            salaire: salaire,
            dateAjout:selectedDate

        }
        console.log(emp)
        employee.push(emp)
        const nomel=document.querySelector('#Nom')
        const salaireel=document.querySelector('#Salaire')
        nomel.value=''
        salaireel.value=''
        setname('')
        setsalaire(200)
        console.log(employee)
        //window.location.replace("http://localhost:3000/Employes");
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'un Employé:</h1>
                <TextField id="Nom" label="Nom" onChange={handleNameChange} />
                <br />
                <TextField type='number' id="Salaire" label="Salaire" onChange={handleSalaireChange} />
                <br />
                <TextField
                    id="datetime-local"
                    label="Date d'inscription"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={handleDateChange}
                />

                <br />
              <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>Ajouter</button>
            </form>
        </div>
    )
}
export default AddEmployee
