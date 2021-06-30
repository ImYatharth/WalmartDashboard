import React, { Component } from 'react'
import './Reports.css';
class Products extends Component{

    constructor(props){
     super(props);
    
     this.state = {
        fullname: "",
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
     this.setState ( { [event.target.name] :event.target.value  })
    }
    
        handlesubmit = (event) => {
            if (this.state.auditTopic && this.state.auditTopicBrokers && this.state.auditSchema && this.state.consumerProperties
                && this.state.auditDetails && this.state.rulebookName && this.state.rulebookJobTypes && this.state.rulebookType && this.state.ruleBookDetails
                && this.state.tenant && this.state.topic && this.state.TopicBrokers && this.state.ruleBookLogic)
     {
         alert ("Your form has been submitted.");
     // alert( JSON.stringify(this.state));
     console.log( JSON.stringify(this.state));
     event.preventDefault();
     }
     else
        alert("One or more fields are incomplete");
    
    }
    updateCategory = (e) => {
        if(e.target.checked) {
           this.setState({ enable: e.target.value})
        }
    }
    render(){
     return(
      <div>
      <br/>
        <span>Audit Consumer</span> <br/><br/>
        <form onSubmit = {this.handlesubmit} >
        <table className="yatharth">
        <tbody>
        <tr>
        <td><label> Audit Topic </label></td>
        <td><input  type="text" name="auditTopic"  value={this.state.auditTopic}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Audit Topic brokers </label></td>
        <td><input  type="text" name="auditTopicBrokers" value= {this.state.auditTopicBrokers} 
                onChange={this.handlechangeall} /> </td>
         </tr>
        <tr>
        <td><label> Audit Schema </label></td>
        <td><input  type="text" name="auditSchema" value= {this.state.auditSchema} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Additional Audit Details </label></td>
        <td><input  type="text" name="auditDetails"  value={this.state.auditDetails}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Consumer Properties </label></td>
        <td><input  type="text" name="consumerProperties"  value={this.state.consumerProperties}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        </tbody>
        </table>
                <hr></hr>
        <span>Rule Book</span> <br/><br/>
        <table className="yatharth">
        <tbody>
        <tr>
        <td><label> Rulebook Name </label></td>
        <td><input  type="text" name="rulebookName"  value={this.state.rulebookName}  
                onChange={this.handlechangeall} /></td>
        </tr>
        <tr>
        <td><label> Rulebook Job Types    </label></td>
        <td><input  type="text" name="rulebookJobTypes" value= {this.state.rulebookJobTypes} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Rulebook Type </label></td>
        <td><input  type="text" name="rulebookType" value= {this.state.rulebookType} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Enable </label></td>
        <td><label><input  type="radio" name="enable"  value="0" defaultChecked//checked={this.props.checked === "false"}
                onChange={this.updateCategory} />False  <input  type="radio" name="enable"  value="1" //checked={this.props.checked === "true"}
                onChange={this.updateCategory} />True</label> </td>
        </tr>
        <tr>
        <td><label> Rulebook Details </label></td>
        <td><input  type="text" name="ruleBookDetails"  value={this.state.ruleBookDetails}  
                onChange={this.handlechangeall} /> </td>
        </tr></tbody></table>
        <hr/>
        <span>Replay Service</span> <br/><br/>
        <table>
        <tbody>
        <tr>
        <td><label> Tenant </label></td>
        <td><input  type="text" name="tenant"  value={this.state.tenant}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>   
        <td><label> Topic </label></td>
        <td><input  type="text" name="topic" value= {this.state.topic} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Topic Brokers </label></td>
        <td><input  type="text" name="topicBrokers" value= {this.state.TopicBrokers} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Rulebook Logic </label></td>
        <td><input  type="text" name="ruleBookLogic"  value={this.state.ruleBookLogic}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Enable Big Ben </label></td>
        <td><label><input  type="radio" name="enableBigBen"  value="false" defaultChecked//checked={this.props.checked === "false"}
                onChange={this.updateCategory} />False  <input  type="radio" name="enableBigBen"  value="true" //checked={this.props.checked === "true"}
                onChange={this.updateCategory} />True</label> </td>
        </tr>
        </tbody>
        </table>   
        <input type="submit" value="Send" />
       </form>
      </div>
     )
    }
}
export default Products;