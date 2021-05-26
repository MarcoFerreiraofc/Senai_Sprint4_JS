import './App.css';
import React from 'react';

function Hora(props)
{
  return <h2>Horário Atual : {props.date.toLocaleTimeString()}</h2>
} 

class Relogio extends React.Component
{
  constructor(props)
  {
    super(props)
    this.state =
    {
      date : new Date()
    }
  }

  componentDidMount()
  {
    this.timerID = setInterval( () => 
    {
      this.ticTac()
    }, 1000)
  }

  componentWillUnmount()
  {
    clearInterval(this.timerID)
  }

  ticTac()
  {
    this.setState(
      {
        date : new Date()
      }
    )
  }

  pausar() {    
    console.log(`Relógio ${this.timerID} pausado!`)
    clearInterval(this.timerID)
  }

  voltar()
  {
    this.tempoID = setInterval( () => 
    {
      this.ticTac()
    }, 1000)
    console.log(`Relógio ${this.timerID} retomado! Agora eu sou o Relógio ${this.tempoID}`)
  }

  render()
  {
    return(
    <div>
      <h1> Relógio Mágico </h1>
      <Hora date={this.state.date} />
      <button onClick={() => this.pausar()} > Pausar Relógio {this.timerID} </button>
    </div>
    ) 
  }

}

function App() 
{
  return(
    <div className="App">
      <header className="App-header">
        <Relogio />        
        <Relogio />
      </header>
    </div>
  );
}

export default App;