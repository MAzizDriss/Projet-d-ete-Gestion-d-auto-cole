import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
        marginBottom: '36.2vh'
    },
}));
const AddEmployee = () => {
    const history = useHistory();
    const classes = useStyles();
    const [payday, setpayday] = React.useState(1);
    const handlePayDayChange = (event) => {
        setpayday(event.target.value);
    };
    const [name, setname] = React.useState('')
    const handleNameChange = (event) => {
        setname(event.target.value)
    }
    const [salaire, setsalaire] = React.useState(200)
    const handleSalaireChange = (event) => {
        setsalaire(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        //verification
        const emp = {
            name: name,
            salaire: salaire,
            dayofpayment: payday,

        }

        axios.post('http://localhost:3001/api/admin/employee/add', emp, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then(() => { history.push('/employes'); })
            .catch((err) => console.log(err))
        const nomel = document.querySelector('#Nom')
        const salaireel = document.querySelector('#Salaire')
        const payel = document.querySelector('#payday')
        nomel.value = ''
        salaireel.value = ''
        payel.value = ''
        setname('')
        setsalaire(200)
        setpayday(0)
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Ajout d'un Employé:</h1>
                <TextField id="Nom" label="Nom" onChange={handleNameChange} />
                <br />
                <TextField type='number' id="Salaire" label="Salaire" onChange={handleSalaireChange} />
                <br />
                <TextField type='number' id="payday" label="Jour de paiement" onChange={handlePayDayChange} />
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }}>Ajouter</button>
            </form>
        </div>
    )
}
export default AddEmployee
