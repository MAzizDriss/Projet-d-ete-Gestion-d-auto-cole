import React from 'react'
import axios from 'axios'

const Test = () => {
    const [user, setuser] = React.useState({})
    const [post, setpost] = React.useState({})
    React.useEffect(() => {
        axios.get('http://localhost:3001/api/test',{headers:{
            "auth-token":localStorage.getItem('token')
        }}).then((result)=>{setpost(result.data.posts)
                            setuser(result.data.user.userData)
                                })
        .catch((err)=>console.log(err))
    }, [])

    return (

        <div>
            <h1>HIII {user.name}</h1>
            <h2>You are signed as an {user.role}</h2>
            <h3> Here's the post {post.title}:</h3>
            <p>{post.description}</p>
        </div>
    )
}

export default Test
