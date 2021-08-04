import React from 'react';
import employee from '../Data/Employee';
import EmployeeCard from './EmployeeCard';
import { Container,Button} from '@material-ui/core';
console.log(employee)

function Employes() {
  return (
    <div>
        <h1 className='title'>Employés</h1>
    <Container fixed >
    <Button href='/Employes/Add' variant="contained" color="secondary" style={{marginLeft:'45%',width:'10%', marginTop:'2%'}}>
   <center style={{marginRight:'15%'}} >Ajouter</center>
  </Button>
      <div style={{marginLeft:'16%',marginTop:'7vh'}}>
     {
       employee.map( e=>
         <EmployeeCard emp={e}/>
       )
     }
     </div>
    </Container>
    </div>
  );
}

export default Employes;
