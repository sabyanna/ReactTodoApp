import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    render() {
        return (
            
            <form className="addForm" onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <Grid
                    justify="center"
                    container 
                    maxWidth="sm" 
                    spacing={24}
                    
                >
                    <Grid item xs={7}>
                        <TextField
                            type="text"
                            name="title"
                            placeholder="Add Todo ..."
                            value={this.state.title}
                            onChange={this.onChange}
                            fullWidth
                        />
                        </Grid>
                    <Grid item xs={1}>
                        <Button
                            variant="outlined"
                            color="primary"
                            type="submit"
                            value="submit"
                            className="btn" 
                            style={{marginLeft: '10px'}} 
                            fullWidth                         
                        >Submit</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}

export default connect(null, { addTodo}) (AddTodo)
