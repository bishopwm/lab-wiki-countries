import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

class NavBar extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log(this)
    }
    render() {
        return (
            <div>
                <nav className="nav-style">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/country/:id'>Country Details</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;