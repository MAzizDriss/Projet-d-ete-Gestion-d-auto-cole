import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import axios from 'axios';
const ProtectedAdminRoute = ({ component: Component, ...rest }) => {
    const [role, setrole] = React.useState("")
    const [isAuth, setisAuth] = React.useState(localStorage.getItem('isAuth'))
    const [user, setuser] = React.useState({})
    React.useEffect(() => {
        axios.get('http://localhost:3001/api/test', {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        }).then((result) => {
            setuser(result.data.user.userData)
            setrole(result.data.user.userData.role)
            console.log(result.data.user.userData.role)
        })
            .catch((err) => console.log(err))
    }, [])
    React.useEffect(() =>
        setisAuth(localStorage.getItem("isAuth"))
        , [isAuth])
    return (
        <Route {...rest}
            render={(props) => {
                if (isAuth === 'true') {
                    if (role === "Admin") { return <Component /> }
                    if (role === "User") {
                        return <h1>You have no permission dear User</h1>
                    }
                    else {
                        return <div>
                        </div>
                    }

                }
                else {
                    return <Redirect from="/protected" to="/login" />
                }
            }

            }
        />

    )
}

export default ProtectedAdminRoute
