import React, {Component} from 'react';
import Axios from "axios";
import Aux from "../../hocs/auxiliar";
import TodoItemList from "./todoItemList";
import AddTodo from "./addTodo";

class Todos extends Component<any> {

    state = {
        todos: []
    };


    componentDidMount(): void {
        Axios.get('https://jsonplaceholder.typicode.com/todos/').then(resp => {
            console.log(resp)
            this.setState({
                ...this.state,
                todos: resp.data.slice(0, 6)
            })
        });

    }

    render(): any {
        const todoList = this.state.todos.length ? this.state.todos.map((todo: any) => <TodoItemList
                delete={this.handleDelete} key={todo.id} todo={todo}/>) :
            <p className="center"> There is no task left. </p>
        return (
            <Aux>
                <h2 className={"center blue-text"}>Todo Page</h2>
                <AddTodo add={this.handleAdd} />
                <div className="container collection">
                    {todoList}
                </div>
            </Aux>
        );
    }

    handleDelete = (id: any) => {
        this.setState({
            todos: this.state.todos.filter((todo: any) => todo.id !== id)
        });
    };

    handleAdd = (todo: any) =>  {
        this.setState({
          todos: [todo, ...this.state.todos ]
        })
    };
}

export default Todos;