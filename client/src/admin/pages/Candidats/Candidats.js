import React from "react";
import './Candidats.css';
import CandidatCard from "./CandidatCard"
import axios from 'axios'


function Candidats(){
  const [users, setusers] = React.useState([])
  React.useEffect(() => {
    axios.get('http://localhost:3001/api/admin/clients',{headers:{
        "auth-token":localStorage.getItem('token')
    }}).then((result)=>{ setusers(result.data) })
    .catch((err)=>console.log(err))
}, [])

  return (
    <div>
    <h1 className="title">Candidats</h1>
    <>
    {console.log(users)}
       <CandidatCard candidats={users}/>
       </>
    </div>
  );
};

export default Candidats;