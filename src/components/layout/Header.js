import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
 
  export default function Header() {
 
    return (
        <div>
        <AppBar position="static">
            
            <Toolbar >
            
                <Grid
                    justify="center"
                    container 
                    maxWidth="sm" 
                >
                    
                    <Grid item xs={7}>
                        <Typography variant="title" color="inherit"  >
                            <h1>TodoList</h1>
                        </Typography>
                    </Grid>

                    <Grid item xs={1}>
                        <Button variant="contained" color="primary" to="/">Home</Button>
                        
                    </Grid>

                    <Grid item xs={1}>
                        
                        <Button variant="contained" color="primary" to="/about">About</Button>
                        
                    </Grid>
                </Grid>
            </Toolbar>
            
        </AppBar>   
        </div>
    )
  }
