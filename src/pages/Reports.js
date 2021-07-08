import React, { Component } from 'react'
import './Reports.css';
class Reports extends Component{

    constructor(props){
     super(props);
    
     this.state = {
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
     this.setState ( { [event.target.name] :event.target.value  })
    }
    
        handlesubmit = (event) => {
            if (this.state.q1 && this.state.q2 && this.state.q3 && this.state.q4 && this.state.q5 && this.state.q6 &&
               this.state.q7 && this.state.q8 && this.state.q9 && this.state.q10 && this.state.q11 && this.state.q12 &&
                this.state.q13 && this.state.q14 && this.state.q15 && this.state.q16 && this.state.enable)
     {
         alert ("Your form has been submitted.");
     // alert( JSON.stringify(this.state));
     console.log( JSON.stringify(this.state));
     event.preventDefault();
     }
     else
        alert("One or more fields are incomplete");
    
    }
    updateCategory = (event) => {
        if(event.target.checked) {
           this.setState({ enable: event.target.value})
        }
    }
    updateCategorys = (event) => {
        if(event.target.checked) {
           this.setState({ enableBigBen: event.target.value})
        }
    }
    render(){
     return(
      <div>
      <br/>
        <span className="headings">Asking Why 3 times</span> <br/><br/>
        <form onSubmit = {this.handlesubmit} >
        <table className="yatharth">
        <tbody>
        <tr>
        <td><label> Why is this feature important? </label></td>
        <td><input  type="text" name="q1"  value={this.state.q1}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Why is the above answer important? </label></td>
        <td><input  type="text" name="q2" value= {this.state.q2} 
                onChange={this.handlechangeall} /> </td>
         </tr>
        <tr>
        <td><label>  Why is the above answer important?  </label></td>
        <td><input  type="text" name="q3" value= {this.state.q3} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <span className="headings">Business Value</span> <br/><br/>
        <tr>
        <td><label> What larger initiative is this enabling? </label></td>
        <td><input  type="text" name="q4"  value={this.state.q4}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Who is going to be using this functionality as End User <br/>from UI or a report? </label></td>
        <td><input  type="text" name="q5"  value={this.state.q5}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label>  Which Application is going to be integrating directly with ISO?  </label></td>
        <td><input  type="text" name="q6" value= {this.state.q6} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label>In terms of dollars, how is this functionality going to<br/> help Walmart save or increase revenue? </label></td>
        <td><input  type="text" name="q7"  value={this.state.q7}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        {/* </tbody>
        </table> */}
                {/* <hr></hr> */}
        <span className="headings">Volume</span> <br/><br/>
        {/* <table className="yatharth">
        <tbody> */}
        <tr>
        <td><label> How many transactions are we expecting per minute? </label></td>
        <td><input  type="text" name="q8"  value={this.state.q8}  
                onChange={this.handlechangeall} /></td>
        </tr>
        <span className="headings">Point of Contact</span> <br/><br/>
        <tr>
        <td><label> Who is the Lead Engineer?  </label></td>
        <td><input  type="text" name="q9" value= {this.state.q9} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Who is the Product Manager? </label></td>
        <td><input  type="text" name="q10" value= {this.state.q10} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Who is the Project Manager? </label></td>
        <td><input  type="text" name="q11" value= {this.q11} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <span className="headings">Deployment Timelines</span> <br/><br/>
        <tr>
        <td><label> Enable </label></td>
        <td><label><input  type="radio" name="enable"  value="false" //checked={this.props.checked === "false"}
                onChange={this.updateCategory} />False    <input  type="radio" name="enable"  value="true" //checked={this.props.checked === "true"}
                onChange={this.updateCategory} />True</label> </td>
        </tr>
        <tr>
        <td><label> What is the latest this needs to be in Production? </label></td>
        <td><input  type="text" name="q12"  value={this.state.q12}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> What is the latest this needs to be in Stage? </label></td>
        <td><input  type="text" name="q13"  value={this.state.q13}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> When is the Integration Testing supposed to happen? </label></td>
        <td><input  type="text" name="q14"  value={this.state.q14}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Are you open to the idea of Inner Sourcing? </label></td>
        <td><input  type="text" name="q15"  value={this.state.q15}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        {/* </tbody></table> */}
        {/* <hr/> */}
        <span className="headings">Documentaion</span> <br/><br/>
        {/* <table className="yatharth">
        <tbody> */}
        <tr>
        <td><label>Helpful Confluence links for product and engineering. </label></td>
        <td><input  type="text" name="q16"  value={this.state.q16}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        {/* <tr>   
        <td><label> Topic </label></td>
        <td><input  type="text" name="topic" value= {this.state.topic} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Topic Brokers </label></td>
        <td><input  type="text" name="topicBrokers" value= {this.state.topicBrokers} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Rulebook Logic </label></td>
        <td><input  type="text" name="ruleBookLogic"  value={this.state.ruleBookLogic}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Enable Big Ben </label></td>
        <td><label><input  type="radio" name="enableBigBen"  value="false" //checked={this.props.checked === "false"}
                onChange={this.updateCategorys} />False    <input type="radio" name="enableBigBen"  value="true" //checked={this.props.checked === "true"}
                onChange={this.updateCategorys} />True</label> </td> */}
       
        </tbody>
        </table>   
        <input type="submit" value="Send" />
       </form>
      </div>
     )
    }
}
export default Reports;