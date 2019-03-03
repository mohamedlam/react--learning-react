import React , {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class Navbar extends Component<any> {

    render(): any {
        return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo"> Todo App <i className="material-icons">cloud</i> </Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to="/" exact><i className="material-icons">refresh</i></NavLink></li>
                    <li><NavLink to="/todos"><i className="material-icons">view_module</i></NavLink></li>
                </ul>
            </div>
        </nav>
        );
    }
}

export default Navbar ;