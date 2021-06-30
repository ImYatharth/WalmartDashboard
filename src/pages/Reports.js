import React, {Component} from 'react'
import './Reports.css';
class Reports extends Component{

    constructor(props){
     super(props);
    
     this.state = {  fullname: "",
         email: "",
         phone : "",
         message : ""
         }
    }
    
    // handlename = (event) => {
      
    //   this.setState({ fullname: event.target.value })
    // }
    
    // handleemail = (event) => {
      
    //   this.setState({ email: event.target.value })
    // }
    
    // handlenumber = (event) => {
      
    //   this.setState({ number: event.target.value })
    // }
    
    // handlemessage = (event) => {
      
    //   this.setState({ message: event.target.value })
    // }
    
    handlechangeall = (event) =>{
     this.setState ( { [event.target.name] :event.target.value  } )
    }
    
    handlesubmit = (event) => {
     alert (`my name is ${this.state.fullname}. 
      My email id is ${this.state.email}
      My mobile number is ${this.state.phone}.
      My message to your company is ${this.state.message}
      `);
     // alert( JSON.stringify(this.state));
     console.log( JSON.stringify(this.state));
     event.preventDefault();
    }
    
    render(){
     return(
      <div>
      <br/>
       <form onSubmit = {this.handlesubmit} >
        <label> Q1. What is the issue to be presented?</label><br></br>
        <input  type="text" name="fullname"  value={this.state.fullname}  
          onChange={this.handlechangeall} /> <br/>
    
        <label> Q2. What is the cause of this issue? </label><br/>
        <input  type="text" name="email" value= {this.state.email} 
    
     
    
          onChange={this.handlechangeall} /> <br/>
    
        <label> Q3. Who would you like to contact for this? </label><br/>
        <input  type="text" name="phone" value= {this.state.phone} 
                onChange={this.handlechangeall} /> <br/>
    
        <label> Q4. Give a detailed description of this issue. </label><br/>
        <textarea  value= {this.state.message}  name="message"
                onChange={this.handlechangeall} />   <br/>
    
        <input type="submit" value="Send" />
       </form>
      </div>
     )
    }
    
    }
    
    export default Reports;
    
