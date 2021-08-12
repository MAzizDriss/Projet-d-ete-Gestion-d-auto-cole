import React from 'react';
import { Bubble } from 'tsparticles/Options/Classes/Interactivity/Modes/Bubble';
import MainRouter from './admin/MainRouter';
import MainRouterUser from './user/MainRouterUser';
import axios from 'axios'
function App() {
  const [user, setuser] = React.useState({})
  React.useEffect(() => {
    axios.get('http://localhost:3001/api/test', {
      headers: {
        "auth-token": localStorage.getItem('token')
      }
    }).then((result) => {
      setuser(result.data.user.userData)
    })
      .catch((err) => console.log(err))
  }, [])
  return (
    <div>
      {(user.role==="Admin")?<MainRouter/>:<MainRouterUser/>}
    </div>
  );
};
export default App;