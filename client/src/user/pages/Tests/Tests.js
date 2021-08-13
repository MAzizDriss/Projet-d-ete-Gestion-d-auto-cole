import React from "react";
import Button from '@material-ui/core/Button'
const Tests = () => {
 

  return (
    <div style={{width:"100%", backgroundColor:"#3a506b", height:300,marginTop:-1}}>
     <br/><br/>
      <h1 style={{color: '#f2f2f2',
    fontSize: '3.5rem', fontFamily:"sans-serif", marginLeft:400}}>Tests de Code de la route : </h1>
     <br/> <h2 style={{color: '#f2f2f2',
    fontSize: '1.5rem', fontFamily:"Century Gothic", fontWeight:"normal", marginLeft:700}}>
        90 questions
        </h2>
        <br/>
      <h2 style={{color: '#f2f2f2',
    fontSize: '1.5rem', fontFamily:"Century Gothic", fontWeight:"normal", marginLeft:560}}>1 test gratuit de code pour s'entraîner</h2>
      <br/>
      <div style={{display:"flex", flexDirection:"row"}}>
      <h2 style={{color: '#f2f2f2',
    fontSize: '1.5rem', fontFamily:"Century Gothic", fontWeight:"normal", marginLeft:500, marginRight:20}}>Passez un test gratuitement dès maintement : </h2>
   <Button variant="contained">Test</Button>

   </div>
    </div>
  );
};

export default Tests;
