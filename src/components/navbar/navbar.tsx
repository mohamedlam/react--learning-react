import React , {Component} from 'react';
import NavItem from "./navitem";

class Navbar extends Component<any> {

    render(): any {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>Logo</a>
                    <ul className="right hide-on-med-and-down">
                        <NavItem navLink to={"/todos"}><i className="material-icons">view_module</i></NavItem>
                        <NavItem navLink to={"/"}><i className="material-icons">refresh</i></NavItem>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar ;