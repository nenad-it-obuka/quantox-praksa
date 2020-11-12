import React from "react";




class Form extends React.Component {
    render() {
        return (
            <form>        
                <span id="title">Request a demo</span><br/><br/>            
                <label for="fname">FIRST NAME: <span class="star">*</span></label>
                <input class="fields" type="text" id="fname" required/><br/>
                <label for="lname">LAST NAME: <span class="star">*</span></label>
                <input class="fields" type="text" id="lname" required/><br/>
                <label for="email">WORK EMAIL: <span class="star">*</span></label>
                <input class="fields" type="email" id="email" required/><br/>
                <label for="company">COMPANY: <span class="star">*</span></label>
                <input class="fields" type="text" id="company" required/><br/>
                <label for="csize">COMPANY SIZE: <span class="star">*</span></label>
                <select class="fields" id="csize" required>
                    <option></option>
                    <option value="small">1-100</option>
                    <option value="medium">101-1000</option>
                    <option value="large">1000+</option>
                </select><br/>
                <label for="phone">PHONE NUMBER: <span class="star">*</span></label>
                <input class="fields" type="tel" id="phone" required/><br/>
                <input id="submit-button" type="submit" value="SUBMIT"/>
            </form>
        );
    }
}


export default Form;
