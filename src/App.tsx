import React, { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import Todos from "./components/todos/todos";
import Home from "./components/home/home";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className={'App'}>
            <Navbar />
            <Route path={'/'} component={Home} exact/>
            <Route path={'/todos'} component={Todos} exact/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
