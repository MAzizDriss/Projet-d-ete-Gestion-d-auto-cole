import React from 'react';
import MainRouter from './admin/MainRouter';
import MainRouterEveryone from './everyone/MainRouter';
function App(){
  const [authority, setauthority] = React.useState("admin");

return(
  <div>
  <MainRouter/>
  </div>
  );
};
export default App;