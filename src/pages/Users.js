import React,  {useState} from 'react'
import './Reports.css';
import { v4 as uuidv4 } from 'uuid';
// class Users extends Component{
    // counter= false;
//     constructor(props){
//      super(props);
    
//      this.state = {
//         counter: false    
//     }

//     }
//     handlechangeall = (event) =>{
//      this.setState ( { [event.target.name] :event.target.value  })
//     }
//     render(){
//      return(
//       <div>
//       <br/>
//         <span className="headings">User Info</span> <br/><br/>
//         <form onSubmit = {this.handlesubmit} >
        // <table className="yatharth">
        // <tbody>
        // <tr>
        // <td><label>User ID: </label></td>
        // <td><input  type="text" name="id"  value={this.state.id}  
        //         onChange={this.handlechangeall} /> </td>
        // </tr>
        // <tr>
        // <td><label> Version: </label></td>
        // <td><input  type="text" name="version" value= {this.state.version} 
        //         onChange={this.handlechangeall} /> </td>
        //  </tr>
        // <tr>
        // <td><label> Data Type: </label></td>
        // <td><input  type="text" name="dataType" value= {this.state.dataType} 
        //         onChange={this.handlechangeall} /> </td>
        // </tr>
//         <button onClick={()=> {
//             <tr>
//                 <td><label> Rulebook Name </label></td>
//                 <td><input  type="text" name="rulebookName"  value={this.state.rulebookName}  
//                  onChange={this.handlechangeall} /></td>
//             </tr>
//             console.log("pants")
//             }}>+ New User</button><br></br>
//         </tbody>
//         </table>   
//         <input type="submit" value="Send" />
//        </form>
//       </div>
//      )
//     }

function Users() {

        // this.state = {
        //                 }
        // const handlechangeall = (event) =>{this.setState ( { [event.target.name] :event.target.value  })}                                        
        const [inputFields, setInputFields] = useState([
          { step_id: '', step_type: '', next_step_id: '', step_inputs:'' }
        ]);
        const [inputFlds, setInputFlds] = useState([
          { workflow_id:'',workflow_version:'', workflow_dataType:'' }
        ]);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("Workflow data", inputFlds);
          console.log("Step data", inputFields);
        };
      
        // const handleChangeInput = (id, event) => {
        //   const newInputFields = inputFields.map(i => {
        //     if(id === i.id) {
        //       i[event.target.name] = event.target.value
        //     }
        //     return i;
        //   })
          
        //   setInputFields(newInputFields);
        // }
        const handleChangeInput1 = (index1, event) => {
          const values = [...inputFields];
          values[index1][event.target.name]=event.target.value;
          setInputFields(values);
        }
        const handleChangeInput2 = (index, event) => {
          const values = [...inputFlds];
          values[index][event.target.name]=event.target.value;
          setInputFlds(values);
        }
      
        // const handleAddFields = () => {
        //   setInputFields([...inputFields, { id: uuidv4(), step_id: '', step_type: '', next_step_id: '',step_inputs: '' }])
        // }
        const handleAddFields = () => {
          setInputFields([...inputFields, { step_id: '', step_type: '', next_step_id: '',step_inputs: '' }])
        }
        return (
          <div>
            <form onSubmit={handleSubmit}>
            <table className="yatharth">
            <tbody>
            {inputFlds.map((inputFld,index)=>(
            <div key={index}>
            <tr>
                <td><label> Workflow ID: </label></td>
                <td><input  type="text" name="workflow_id"  value={inputFld.workflow_id}  
                    onChange={event => handleChangeInput2(index, event)} /> </td>
            </tr>
             {/* <tr>
                <td><label> Workflow ID: </label></td>
                <td><input  type="text" name="workflow_id"  value={this.state.workflow_id}  
                    onChange={this.handlechangeall} /> </td>
            </tr> */}
             <tr>
                <td><label> Workflow Version: </label></td>
                <td><input  type="text" name="workflow_version" value= {inputFld.workflow_version} 
                    onChange={event => handleChangeInput2(index, event)} /> </td>
            </tr>
            <tr>
                <td><label> Workflow Data Type: </label></td>
                <td><input  type="text" name="workflow_dataType" value= {inputFld.workflow_dataType} 
                    onChange={event => handleChangeInput2(index, event)} /> </td></tr> 
                </div>))}
                <hr/>
              { inputFields.map((inputField,index1) => (
                <div key={index1}>
                <tr>
                <td><label>Step ID: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="step_id"
                    variant="filled"
                    value={inputField.step_id}
                    onChange={event => handleChangeInput1(index1, event)}
                  /></td></tr>
                  <tr>
                <td><label>Step type: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="step_type"
                    variant="filled"
                    value={inputField.step_type}
                    onChange={event => handleChangeInput1(index1, event)}
                  /></td></tr>
                  <tr>
                <td><label>Next Step ID: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="next_step_id"
                    variant="filled"
                    value={inputField.next_step_id}
                    onChange={event => handleChangeInput1(index1, event)}
                  /></td></tr>
                    <tr>
                <td><label>Step Inputs: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="step_inputs"
                    variant="filled"
                    value={inputField.step_inputs}
                    onChange={event => handleChangeInput1(index1, event)}
                  /></td></tr>
                  <button onClick={handleAddFields} >
                    + Add Steps
                  </button>
                </div>
              )) }
              <button onClick={handleSubmit} className="send">Submit</button>
              </tbody>
              </table>
            </form>
          </div>
        );
      }
      export default Users;