import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';

class NavItem extends Component<any> {

    render(): any {
        const navitem = this.props.navLink ?
            <NavLink to={this.props.to}>{this.props.children}</NavLink> :
            <Link to={this.props.to}>{this.props.children}</Link>
        return (
            <li>
                {navitem}
            </li>
        );
    }
}

export default NavItem;