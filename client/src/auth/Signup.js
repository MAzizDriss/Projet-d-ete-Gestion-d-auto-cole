import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

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
const Signup = () => {
    const classes = useStyles();
    const [name, setname] = React.useState('')
    const handleNameChange = (event) => {
        setname(event.target.value)
    }
    const [email, setemail] = React.useState(200)
    const handleEmailChange = (event) => {
        setemail(event.target.value)
    }
    const [password, setpassword] = React.useState('')
    const handlePasswordChange = (event) => {
        setpassword(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        //verification client side

        const client = {
            name: name,
            e_mail:email,
            password:password
          }
        console.log(client)
        const nomel = document.querySelector('#Nom')
        const emailel = document.querySelector('#e_mail')
        const passel = document.querySelector('#password')
        nomel.value = ''
        emailel.value = ''
        passel.value=''
        setname('')
        setemail('')
        setpassword('')
        axios.post('http://localhost:3001/api/user/register',client).then((result)=>{console.log(result)
        window.location.replace("http://localhost:3000/login");})
        .catch((err)=>console.log(err))
      
       
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Sign Up</h1>
                <TextField id="Nom" label="Nom" onChange={handleNameChange} />
                <br />
                <TextField type='email' id="e_mail" label="E_mail" onChange={handleEmailChange} />
                <br />
                <TextField
                    id="password"
                    label="Mot de passe"
                    type="password"
                    autoComplete="current-password"
                    onChange={handlePasswordChange}
                />
                <br />
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>Ajouter</button>
            </form>
        </div>
    )
}
export default Signup
