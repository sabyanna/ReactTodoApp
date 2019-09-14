import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import Grid from '@material-ui/core/Grid';

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
            <Grid
            justify="center"
            container
            >
                <form className="addForm" onSubmit={this.onSubmit} style={{ display: 'flex'}}>
                <Grid item xs={6}>
                    <input 
                        type="text"
                        name="title"
                        style={{flex: '10', paddig: '5px'}}
                        placeholder="Add Todo ..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    </Grid>
                    <Grid item xs={3}>
                    <input
                        type="submit"
                        value="submit"
                        className="btn"
                        style={{felx: '1'}}
                    />
                    </Grid>
                    
                </form>
            </Grid>
        )
    }
}

export default connect(null, { addTodo}) (AddTodo)
