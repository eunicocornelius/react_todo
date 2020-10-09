import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddTodo extends Component {

    state = {
        title: ''
    }
    
    //[e.target.name] is so that if there are multiple fields and not only title (eg, username, age, etc), no duplocate onChange function is needed.
    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type='text' 
                name='title' 
                placeholder='Add Todo ...' 
                style={{flex: '10', padding: '5px'}}
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type='submit' 
                value='Submit' 
                className='btn' 
                style={{flex:'1'}}
                />
            </form>
        )
    }
}

// PropTypes
AddTodo.propTypes = {
    todo: PropTypes.object.isRequired
}

export default AddTodo
