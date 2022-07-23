import React, { Component } from "react"

class App extends Component{

  constructor(props){
    super(props);
    this.state ={
      hora:'00:00:00'
    };
  }

  componentDidMount(){// Quando o componente é montado
    setInterval(() =>{
      this.setState({hora: new Date().toLocaleTimeString()})
    }, 1000);
  }

  componentDidUpdate(){// Quando o componente é atualizado

  }

  shouldComponentUpdate(){ //verifica se o componente precisa atualizar

  }

  render(){
    return(
      <div>
        <h2>Meu projeto {this.state.hora}</h2>
      </div>
    )
  }
}

export default App;