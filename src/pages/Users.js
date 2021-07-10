import React, { Component } from 'react'
import './Reports.css';
class Users extends Component{
    // counter= false;
    constructor(props){
     super(props);
    
     this.state = {
        counter: false    
    }

    }
    handlechangeall = (event) =>{
     this.setState ( { [event.target.name] :event.target.value  })
    }
    
    //     handlesubmit = (event) => {
    //         if (this.state.auditTopic && this.state.auditTopicBrokers && this.state.auditSchema && this.state.consumerProperties
    //             && this.state.auditDetails && this.state.rulebookName && this.state.rulebookJobTypes && this.state.rulebookType && this.state.ruleBookDetails
    //             && this.state.tenant && this.state.topic && this.state.topicBrokers && this.state.ruleBookLogic && this.state.enable)
    //  {
    //      alert ("Your form has been submitted.");
    //  // alert( JSON.stringify(this.state));
    //  console.log( JSON.stringify(this.state));
    //  event.preventDefault();
    //  }
    //  else
    //     alert("One or more fields are incomplete");
    
    // }
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
    userx = (event) => {
        this.setState({counter: true})
    }
    render(){
     return(
      <div>
      <br/>
        <span className="headings">User Info</span> <br/><br/>
        <form onSubmit = {this.handlesubmit} >
        <table className="yatharth">
        <tbody>
        <tr>
        <td><label>User ID: </label></td>
        <td><input  type="text" name="id"  value={this.state.id}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        <tr>
        <td><label> Version: </label></td>
        <td><input  type="text" name="version" value= {this.state.version} 
                onChange={this.handlechangeall} /> </td>
         </tr>
        <tr>
        <td><label> Data Type: </label></td>
        <td><input  type="text" name="dataType" value= {this.state.dataType} 
                onChange={this.handlechangeall} /> </td>
        </tr>
        <button onClick={()=> {
            <tr>
                <td><label> Rulebook Name </label></td>
                <td><input  type="text" name="rulebookName"  value={this.state.rulebookName}  
                 onChange={this.handlechangeall} /></td>
            </tr>
            console.log("pants")
            }}>+ New User</button><br></br>
        
             
        {/* <tr>
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
        <td><label><input  type="radio" name="enable"  value="false" //checked={this.props.checked === "false"}
                onChange={this.updateCategory} />False    <input  type="radio" name="enable"  value="true" //checked={this.props.checked === "true"}
                onChange={this.updateCategory} />True</label> </td>
        </tr>
        <tr>
        <td><label> Rulebook Details </label></td>
        <td><input  type="text" name="ruleBookDetails"  value={this.state.ruleBookDetails}  
                onChange={this.handlechangeall} /> </td>
        </tr>
        {/* </tbody></table> */}
        {/* <hr/> */}
        {/* <span className="headings">Replay Service</span> <br/><br/> */}
        {/* <table className="yatharth">
        <tbody> */}
        {/* <tr>
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
                onChange={this.updateCategorys} />True</label> </td>
        </tr> */} 
        </tbody>
        </table>   
        <input type="submit" value="Send" />
       </form>
      </div>
     )
    }
}
export default Users;