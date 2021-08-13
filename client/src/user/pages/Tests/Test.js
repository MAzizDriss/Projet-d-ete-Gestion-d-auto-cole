import React from "react";
import Card from "./TestCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Timer from "./Timer";


const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    marginTop:35,
    marginBottom:'30px'
 },
});

export default function Test() {
  const classes = useStyles();
  return (
    <div>
  
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
    >
     
      <Grid item xs={12} sm={6} md={4}>
        <Card/>
      </Grid>
      
    </Grid>
    <div  style={{marginLeft:900, marginTop:-500}}>
    <Timer/>
    </div>
    </div>
  );
}