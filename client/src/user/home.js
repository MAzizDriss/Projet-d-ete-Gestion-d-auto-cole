import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Serv from './pages/home/services';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Serv />
    </div>
  );
}