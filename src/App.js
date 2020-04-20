import React from "react";
import Button from "./Button";
import InputComponent from "./InputComponent";
import "./styles.css";


class App extends React.Component {
  state = {
    updateFirstName: "",
    updateLastName: "",
    updatePhoneNumber: "",
    loginFlag:true,
    responseData:[]
  };
  onChangeFirstName= e => {
    this.setState({ updateFirstName: e.target.value });
  };
  onChangeLastName= e => {
    this.setState({ updateLastName: e.target.value });
  };
  onChangePhoneNumber= e => {
    this.setState({ updatePhoneNumber: e.target.value });
  };
  buttonClickLogin =()=>{
    this.setState({loginFlag:false})
   const URL="https://jsonplaceholder.typicode.com/todos/1"
   fetch(URL).then(
  response =>{return response.json()}).then(data=>{
   console.log(JSON.stringify(data))
  this.setState({responseData:JSON.stringify(data)})
    })
  
  }
  buttonClickLogout=()=>{
    this.setState({loginFlag:true})
    this.setState({ updateFirstName:"",updateLastName: "", updatePhoneNumber: ""})
  }
  buttonClickClear=()=>{
    this.setState({ updateFirstName:"",updateLastName: "", updatePhoneNumber: ""})
  }
  render() {
    let ButtonLogic;
    if(this.state.loginFlag === true){
       ButtonLogic = <div><Button onClick={this.buttonClickLogin} name="Submit" />
        <Button onClick={this.buttonClickClear} name="Clear" /></div>
    }
    else{
       ButtonLogic = <Button onClick={this.buttonClickLogout} name="Home"/>
    }
    return (
      <div className="App">
        { this.state.loginFlag === true &&
        <div>
        <InputComponent label="Please enter First Name" value={this.state.updateFirstName} onChange={this.onChangeFirstName} />
        <InputComponent label="Please enter Last Name" value={this.state.updateLastName} onChange={this.onChangeLastName} />
        <InputComponent label="Please enter Phone Num" value={this.state.updatePhoneNumber} onChange={this.onChangePhoneNumber} />
        <hr />
        </div>
        }
     {ButtonLogic}
     {this.state.loginFlag === false &&
     <div>
     <div>First name:{this.state.updateFirstName}</div>
     <div>Last Name:{this.state.updateLastName}</div>
     <div>Phone Num:{this.state.updatePhoneNumber}</div>
     <div>  Responses:{this.state.responseData}</div>
     </div>

   }
        <hr />
      </div>
    );
  }
}
export default App;
