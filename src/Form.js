import React from "react";
import history from './history';


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
      errors: {
        fname: false,
        lname: false,
        email: false,
        company: false,
        csize: false,
        phone: false        
      }
    };

    this.handleOnChange = this.handleOnChange.bind(this);    
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  
  handleOnChange(event) {        
    let id = event.target.id;
    let value = event.target.value;

    this.setState({
      [id]: value
    });
  }
  
  handleOnSubmit(event) {            
    event.preventDefault();

    const { fname, lname, email, company, csize, phone } = this.state;

    this.setState({
      errors: {
        fname: fname === '',
        lname: lname === '',
        email: email === '',
        company: company === '',
        csize: csize === '',
        phone: phone === ''
      }
    });    
    
    let counter = 0;

    for (let x in this.state.errors) {
      if(this.state[x]) {
        counter++;
      }
    }

    console.log(counter);

    if(counter == 6) {
      history.push("/confirmation");
    }    
  }

  render() {
      return (          
        <form onSubmit={this.handleOnSubmit}>
          <span id="title">Request a demo</span><br/><br/>            
          <label htmlFor="fname">FIRST NAME: <span className="star">*</span></label>
          {this.state.errors.fname && <span className="errorsMessage"> Required field </span>}
          <input className={this.state.errors.fname ? 'error' : ''} id="fname" type="text" 
                 value={this.state.fname} onChange={this.handleOnChange} /> <br/>          
          <label htmlFor="lname">LAST NAME: <span className="star">*</span></label>
          {this.state.errors.lname && <span className="errorsMessage"> Required field </span>}
          <input className={this.state.errors.lname ? 'error' : ''} id="lname" type="text" 
                 value={this.state.lname} onChange={this.handleOnChange} /> <br/>
          <label htmlFor="email">WORK EMAIL: <span className="star">*</span></label>
          {this.state.errors.email && <span className="errorsMessage"> Required field </span>}
          <input className={this.state.errors.email ? 'error' : ''} id="email" type="email" 
                 value={this.state.email} onChange={this.handleOnChange} /> <br/>
          <label htmlFor="company">COMPANY: <span className="star">*</span></label>
          {this.state.errors.company && <span className="errorsMessage"> Required field </span>}
          <input className={this.state.errors.company ? 'error' : ''} id="company" type="text" 
                 value={this.state.company} onChange={this.handleOnChange} /> <br/>
          <label htmlFor="csize">COMPANY SIZE: <span className="star">*</span></label>
          {this.state.errors.csize && <span className="errorsMessage"> Required field </span>}
          <select className={this.state.errors.csize ? 'error' : ''} id="csize" value={this.state.csize} 
                  onChange={this.handleOnChange} >
            <option></option>
            <option value="small">1-100</option>
            <option value="medium">101-1000</option>
            <option value="large">1000+</option>
          </select> <br/>
          <label htmlFor="phone">PHONE NUMBER: <span className="star">*</span></label>
          {this.state.errors.phone && <span className="errorsMessage"> Required field </span>}
          <input className={this.state.errors.phone ? 'error' : ''} id="phone" type="tel" 
                 value={this.state.phone} onChange={this.handleOnChange} /> <br/>
          <input id="submit-button" type="submit" value="SUBMIT"/>
        </form>
      );    
  } 
}   

export default Form;
