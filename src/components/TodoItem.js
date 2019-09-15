import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { delTodo, markCompleted} from '../actions/todoActions';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox';
import ClearIcon from '@material-ui/icons/Clear';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            marginTop: '7px'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div>
                <Grid
                    justify="center"
                    container 
                    maxWidth="sm" 
                >
                    <Grid item xs={1}>
                        <Checkbox
                            className="checker"
                            type="checkbox"
                            checked={completed}
                            color="primary"
                            onChange={() => this.props.markCompleted(id, !completed, title)} /> 
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle1" gutterBottom>
                            <p style={this.getStyle()}>{title}</p>
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button  
                            color="secondary"
                            style={{marginLeft: '10px'}} 
                            fullWidth  
                            onClick={() => this.props.delTodo(id)}><ClearIcon/></Button>  
                    </Grid>                   
                </Grid>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default connect(null, { delTodo, markCompleted} ) (TodoItem)