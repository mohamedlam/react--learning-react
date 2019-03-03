import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Todos from "./components/todos/todos";
import Home from "./components/home/home";
import Todo from "./components/todos/todo";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <div className={"container"}>
                <Route path={'/'} component={Home} exact/>
                <Route path={'/todos'} component={Todos} exact/>
                <Route path={'/todos/:id'} component={Todo} exact/>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
