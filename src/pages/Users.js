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
        const [inputFields, setInputFields] = useState([
          { id: uuidv4(), userid: '', version: '', datatype: '' },
        ]);
      
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log("InputFields", inputFields);
        };
      
        const handleChangeInput = (id, event) => {
          const newInputFields = inputFields.map(i => {
            if(id === i.id) {
              i[event.target.name] = event.target.value
            }
            return i;
          })
          
          setInputFields(newInputFields);
        }
      
        const handleAddFields = () => {
          setInputFields([...inputFields, { id: uuidv4(),  userid: '', version: '', datatype: '' }])
        }
        return (
          <div>
            <form onSubmit={handleSubmit}>
            <table className="yatharth">
            <tbody>
              { inputFields.map(inputField => (
                <div key={inputField.id}>
                <tr>
                <td><label>User ID: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="userid"
                    variant="filled"
                    value={inputField.userid}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  /></td></tr>
                  <tr>
                <td><label>Version: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="version"
                    variant="filled"
                    value={inputField.version}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  /></td></tr>
                  <tr>
                <td><label>Data type: </label></td>
                <td>
                  <input 
                    type ="text"
                    name="datatype"
                    variant="filled"
                    value={inputField.datatype}
                    onChange={event => handleChangeInput(inputField.id, event)}
                  /></td></tr>
                  <button onClick={handleAddFields} >
                    + Add User
                  </button>
                </div>
              )) }
              <button onClick={handleSubmit} className="send">submit</button>
              </tbody>
              </table>
            </form>
          </div>
        );
      }
      export default Users;