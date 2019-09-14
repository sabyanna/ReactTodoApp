import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
 
  export default function Header() {
 
    return (
        
        <AppBar position="static">
            <Toolbar>
                <Grid
                    justify="center"
                    container 
                    maxWidth="sm" 
                    spacing={24}
                >
                    <Grid item xs={8}>
                        <Typography variant="title" color="inherit" >
                        <h1>TodoList</h1>
                        </Typography>
                    </Grid>

                    <Grid item xs={1}>
                        <Link to="/">
                            <Button>Home</Button>
                        </Link>
                    </Grid>

                    <Grid item xs={1}>
                        <Link to="/about">
                            <Button>About</Button>
                        </Link>
                    </Grid>
                    
                </Grid>
            </Toolbar>
        </AppBar>       
    )
  }
