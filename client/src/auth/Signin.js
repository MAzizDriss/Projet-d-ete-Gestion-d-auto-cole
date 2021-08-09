import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

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
const Signin = () => {
    const classes = useStyles();
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
            e_mail: email,
            password: password
        }
        const emailel = document.querySelector('#e_mail')
        const passel = document.querySelector('#password')
        emailel.value = ''
        passel.value = ''
        setemail('')
        setpassword('')
        axios.post('http://localhost:3001/api/user/login', client).then(
            (result) => {
                localStorage.setItem('token', result.data.token);
                localStorage.setItem('isAuth', true);
                window.location.replace("http://localhost:3000/test")
            })
            .catch((err) => {
                console.log(err)
                localStorage.setItem('isAuth', false)
            })
    }

    return (
        <div>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit} >
                <h1 style={{ color: '#3A506B' }}>Sign in:</h1>
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
                <button style={{ width: '18vw', marginLeft: '20vw', textAlign: 'center' }} onSubmit={handleSubmit}>LogIn</button>
            </form>
        </div>
    )
}
export default Signin
