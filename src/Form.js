import React from "react";
import { Redirect } from "react-router-dom";


class Form extends React.Component {  
  constructor(props) {
    super(props);  
    
    this.state = {
      fname: '',
      lname: '',
      email: '',
      company: '',
      csize: '',
      phone: '',
      shouldShowConfirmation: false
    };

    this.handleChange = this.handleChange.bind(this);    
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange (event) {        
    let id = event.target.id;
    let value = event.target.value;

    this.setState({[id]: value});
  }
  
  handleSubmit (event) {            
    event.preventDefault();
    
    this.setState({shouldShowConfirmation: true});          
  }

  render() {
    if (this.state.shouldShowConfirmation) {          
      return <Redirect to="/confirmation" />;
    } else {
      return (          
        <form onSubmit={this.handleSubmit}>
          <span id="title">Request a demo</span><br/><br/>            
          <label htmlFor="fname">FIRST NAME: <span className="star">*</span></label>
          <input className="fields" id="fname" type="text" onChange={this.handleChange} required/><br/>
          <label htmlFor="lname">LAST NAME: <span className="star">*</span></label>
          <input className="fields" id="lname" type="text" onChange={this.handleChange} required/><br/>
          <label htmlFor="email">WORK EMAIL: <span className="star">*</span></label>
          <input className="fields" id="email" type="email" onChange={this.handleChange} required/><br/>
          <label htmlFor="company">COMPANY: <span className="star">*</span></label>
          <input className="fields" id="company" type="text" onChange={this.handleChange} required/><br/>
          <label htmlFor="csize">COMPANY SIZE: <span className="star">*</span></label>
          <select className="fields" id="csize" onChange={this.handleChange} required>
            <option></option>
            <option value="small">1-100</option>
            <option value="medium">101-1000</option>
            <option value="large">1000+</option>
          </select><br/>
          <label htmlFor="phone">PHONE NUMBER: <span className="star">*</span></label>
          <input className="fields" id="phone" type="tel" onChange={this.handleChange} required/><br/>
          <input id="submit-button" type="submit" value="SUBMIT"/>
        </form>
      );
    }
  } 
}   

export default Form;
