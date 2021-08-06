import React from 'react';
import { AppBar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Toolbar, Typography } from '@material-ui/core';
export default function Footer() {
    return (
        <AppBar position="static" style={{backgroundColor: "#060b26"}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" style={{marginLeft: "350px"}}>
                © 2021 Auto école SITI
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}