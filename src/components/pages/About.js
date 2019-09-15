import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';


function About() {
    return (
        <>
            <div>
                <Container maxWidth="sm" style={{marginTop: '50px'}} >                      
                    <Typography variant="h2" component="h2" gutterBottom>
                        About
                    </Typography>
                
                    <Typography variant="h5" gutterBottom>
                        This is my Todo app for CX-Ray. <SentimentSatisfiedIcon/>
                    </Typography>
                </Container>              
            </div>           
        </>
    )
}

export default About;