import React, { Component } from "react"
import Membro from './components/Membro/Membro'

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
    };
  }

  render(){
    return(
      <div>
        <Membro/>
      </div>
    )
  }
}

export default App;