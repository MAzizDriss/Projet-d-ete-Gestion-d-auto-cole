import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import employee from '../Data/Employee';
import { useParams } from 'react-router-dom';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
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
const EditEmployee = () => {
    const { id } = useParams()
    const classes = useStyles();
    const [emp, setemp] = React.useState(employee[id - 1])
    const [paid, setpaid] = React.useState(emp.paiement)
    const [name, setname] = React.useState(emp.name)
    const handleSwitchChange = (event) => {
        setpaid((event.target.value==='true'))
    }
    const handleNameChange = (event) => {
        setname(event.target.value)
    }
    const [salaire, setsalaire] = React.useState(emp.salaire)
    const handleSalaireChange = (event) => {
        setsalaire(event.target.value)
    }
    const handleDelete = ()=>{
        alert('Deleted')
        delete(employee[id -1])

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        //verification
        const emplo = {
            id: emp.id,
            name: name,
            sessions: emp.sessions,
            salaire: salaire,
            dateAjout: emp.dateAjout,
            paiement:paid,
            jourpaiment:emp.jourpaiment

        }
        console.log(emplo)
        employee[id -1]=emplo
        alert('Saved')
        //window.location.replace("http://localhost:3000/Employes");
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Modification d'un Employé:</h1>
                <TextField id="Nom" label="Nom" value={name} onChange={handleNameChange} />
                <br />
                <TextField type='number' id="Salaire" label="Salaire" value={salaire} onChange={handleSalaireChange} />
                <br />
                <FormControl component="fieldset">
                    <FormLabel component="legend" >{`a reçu le paiement le ${emp.jourpaiment}/${new Date().getMonth()+1}`}</FormLabel>
                    <RadioGroup aria-label="gender" id='type' name="paiement" value={paid} onChange={handleSwitchChange}>
                        <FormControlLabel value={true} control={<Radio />} label="Oui" />
                        <FormControlLabel value={false} control={<Radio />} label="Non" />
                    </RadioGroup>
                </FormControl>
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>Enregistrer</button>
            </form>
            <Button color="secondary" variant="contained" style={{marginLeft:'60%'}}><div style={{marginRight:'15%'}} onClick={handleDelete}>supprimer</div></Button>

        </div>
    )
}
export default EditEmployee
