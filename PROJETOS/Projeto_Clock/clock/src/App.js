import React from 'react';
import './App.css';

// define uma função "DataFormatada" e retorna um subtítulo com o horário atual
function DataFormatada(propriedades){
  return <h2>Horário Atual: {propriedades.date.toLocaleTimeString()}</h2> // esse "toLocaleTimeString" seria para converter a hora
}

// define a "class Clock" qie será chamada na renderização dentro do App(a function)
class Clock extends React.Component{ // cria uma "class" JS que se chama "Clock" é herdada de um componente React, então vai ter um comportamento de um React
  // vamos trabalhar com propriedades
  constructor(propriedades){
    super(propriedades); // permite que trabalhemos com o "this" || o "propriedades" é para que seja possível acessar a propriedade "date"
    this.state = {  // dentro do objeto "state" tem algumas propriedades que são variáveis(estados)
      // define o estado "date" pegando a data/hora atual
      date: new Date() // é o DateTime.Now
    };
  }
  
  // Ciclo de vida que ocorre quando "Clock" é inserido na DOM (function App)
  // essa função vai rodar quando a página for atualizada/renderizada
  componentDidMount(){
    // armazena o ID de um tal relógio
    this.timerID = setInterval(() => {
      // atualiza a hora
      this.thicks();
      // a cada 1000ms(1s)
    }, 1000);

    // exibe no console o ID de cada relógio
    console.log("Relógio retomado!")
    console.log("Agora eu sou o relógio " + this.timerID + "!")
  }

  // Ciclo de vida que ocorre quando o componente é removido da DOM
  // essa função vai rodar quando trocar de página, daí para de renderizar
  // quando isso ocorre, a função clearInterval limpa o relógio criado pelo setInterval
  componentWillUnmount(){
    clearInterval(this.timerID)

    console.log("Relógio " + this.timerID + " pausado!")
  }

  // define no state "date" a data atual a cada vez que é chamada
  // o "date" da classe "Clock" vai ser a hora base e o no "thick" vai ter a hora atualizada
  thicks(){
    this.setState({
      date: new Date() // é igual ao DateTime.Now do C#
    });
  }

  pause(){
    clearInterval(this.timerID)

    console.log("Relógio " + this.timerID + " pausado!")
  }

  resume(){
    // armazena o ID de um tal relógio
    this.timerID = setInterval(() => {
      // atualiza a hora
      this.thicks();
      // a cada 1000ms(1s)
    }, 1000);

    // exibe no console o ID de cada relógio
    console.log("Relógio retomado!")
    console.log("Agora eu sou o relógio " + this.timerID + "!")
  }

  // aqui é definido o título do relógio
  render(){
    return(
      <div>
        <h1>Relógio</h1>
        <DataFormatada date ={this.state.date} />
        <button onClick={() => this.pause()} style={{color: "white", fontWeight:"600", height: "25px", marginRight: "10px", backgroundColor: "red"}}>PAUSAR <span style={{color: "green"}}>{this.timerID}</span></button>    
        <button onClick={() => this.resume()} style={{color: "white", fontWeight:"600", height: "25px", marginLeft: "10px", backgroundColor: "green"}} >RETOMAR <span style={{color: "red"}}>{this.timerID}</span></button>
      </div>
    )
  }

}

// função principal do index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Faz a chamada de dois relógios para mostrar a independência deles */}
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

// declara que a função App possa ser usada fora do escopo dela mesma
export default App;
