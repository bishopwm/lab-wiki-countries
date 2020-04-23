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
                <nav className="navbar">
                    <ul className="nav">
                        <li className="nav-link">
                            <Link to='/'>Country List</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;



