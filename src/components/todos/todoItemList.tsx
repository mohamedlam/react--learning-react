import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class TodoItemList extends Component<any> {

    render(): any {
        const nav = this.props.todo.id < 1000 ?

            <NavLink to={"/todos/" + this.props.todo.id} className="secondary-content">
                <i className="material-icons">send</i></NavLink> : null;

        return (

            <li className="collection-item avatar">

                <img src={"images/sample-1.jpg"} alt="" className="circle"/>

                <span className={"title"} onClick={() => this.props.delete(this.props.todo.id)}>
                    {this.props.todo.title}</span>
                {nav}

            </li>

        );
    }
}

export default TodoItemList;