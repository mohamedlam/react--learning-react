import React, {Component} from 'react';
import {randomBytes} from "crypto";

class AddTodo extends Component<any> {

    state = {title: ''};


    handleSubmit = (e: any) => {
        e.preventDefault();
        const  todo = {id: Math.floor(1000 + Math.random()* 2000) , title : this.state.title , completed: false};
        this.props.add(todo);
        this.setState({
            title: ''
        })
    };

    render() {
        return (
                <form onSubmit={(e :any) => this.handleSubmit(e)}>
                    <label>Add new todo: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.title}/>
                </form>
        );
    }

    handleChange = (e: any) => {
        e.preventDefault();
        this.setState({title:e.target.value});
    }
}
export default AddTodo;