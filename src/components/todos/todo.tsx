import React, {Component} from 'react';
import Axios from "axios";

class Todo extends Component<any> {

    state = {
        todo: {id: '', title: '', completed: ''}
    };

    componentDidMount(): void {
        const id = this.props.match.params.id;
        Axios.get('https://jsonplaceholder.typicode.com/todos/' + id).then(resp => this.setState({
            todo : resp.data
        }));
    }

    render(): any {
        return (
            <div className="row ">
                <div className="col s12 m8 offset-m2">
                    <div className="card-panel teal">
                        <span className="white-text">{this.state.todo.title}
                        </span>
                    </div>
                </div>
            </div>);
    }
}

export default Todo;