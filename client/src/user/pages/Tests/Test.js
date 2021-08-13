import React from "react";
import Card from "./TestCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop:35,
    marginBottom:'30px'
 },
});

export default function Test() {
  const classes = useStyles();
  return (
    <div>
         <h1 style={{marginLeft:'95vh', marginTop:'4vh'}} >Questions</h1>
  
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
     
      <Grid item xs={12} sm={6} md={4}>
        <Card/>
      </Grid>
      
    </Grid>
    </div>
  );
}