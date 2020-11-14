import React from "react";
import logo from './images/logo.png';




class Header extends React.Component {
    render() {
        return (            
                <header>
                    <img id="logo" src={logo} alt="Logo Mixpanel"/>
                    <span id="contact">(888) 510-2370</span>    
                </header>              
        );
    }
}


export default Header;
