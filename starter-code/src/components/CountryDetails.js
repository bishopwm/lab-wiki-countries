import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

class CountryDetails extends Component {
    componentDidMount(){ //window.onload happens once when the components first mounts 
        console.log("getting country details " + this)
    } 

    render() {
        return (
            <div>
                Hello, I'm Country Details
            </div>
        );
    }
}

export default CountryDetails;