import React from "react"

const Equipe = (props) => {
  return(
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social nome={props.nome} cargo={props.cargo} idade={props.idade} facebook={props.facebook}/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o {props.nome}</h2>
      <h2>Cargo: {props.cargo}</h2>
      <h2>Idade: {props.idade}</h2>
      <hr/>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href="{props.facebook}">
        Facebook
      </a>
    </div>
    
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Rodrigo" cargo="Programador" idade="24" facebook="rodrigo.machado"/>
      <Equipe nome="Rodrigo" cargo="Programador" idade="24" facebook="rodrigo.machado"/>
      <Equipe nome="Rodrigo" cargo="Programador" idade="24" facebook="rodrigo.machado"/>
      <Equipe nome="Rodrigo" cargo="Programador" idade="24" facebook="rodrigo.machado"/>
    </div>
  )
}

export default App;