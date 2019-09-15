import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function CompletedSign() {
    return (
        <div>
            <Grid
                justify="center"
                container 
                maxWidth="sm"
                alignItems="left"
            >
                <Grid item xs={8}>
                    <Typography style={{marginLeft: 'px'}} variant="h5" component="h2">
                        Completed
                    </Typography>
                </Grid>      
            </Grid>              
        </div>
    )
}