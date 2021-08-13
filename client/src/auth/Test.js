import React from 'react'
import axios from 'axios'

const Test = () => {
    const [user, setuser] = React.useState({})
    const [post, setpost] = React.useState({})
    React.useEffect(() => {
        axios.get('http://localhost:3001/api/auth', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            setuser(result.data.userData)
        })
            .catch((err) => console.log(err))
    }, [])

    return (

        <div>
            <h1>HIII {user.name}</h1>
            <h2>You are signed in as an {user.role}</h2>
        </div>
    )
}

export default Test
