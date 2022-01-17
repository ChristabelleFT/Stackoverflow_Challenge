import React, {Component} from 'react';
import {BsStackOverflow} from 'react-icons/bs';

class Header extends Component {
    render() {
        return (
            <div style={{ 
                padding: "10px 25px",
                display: "flex",
                flexDirection: "row",
                boxShadow: "0px 2px 8px #dee2e6"
            }}>
                <BsStackOverflow style={{ alignSelf: "center" }}/> &nbsp;
                <p>Stack</p>
                <p style={{ fontWeight: "bold" }}>Overflow</p> &nbsp;
                <p style={{ fontSize: 14, alignSelf: "center" }}>Challenge</p>
            </div>
        )
    }
}

export default Header;