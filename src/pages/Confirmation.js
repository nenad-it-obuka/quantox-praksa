import React from 'react';
import { Link } from "react-router-dom";




class Confirmation extends React.Component {
    render() {
        return (            
            <div>
                <p>                        
                    Thank you. Your data is submitted.<br/><br/>
                    This is Confirmation page.<br/><br/>
                    <Link to="/">Go back to Home page</Link>
                </p>
            </div>             
        );
    }
}

export default Confirmation;
