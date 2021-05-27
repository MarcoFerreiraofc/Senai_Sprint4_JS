import { Component } from 'react';
import './App.css';


class SearchGithub extends Component {
  constructor(props) {
    super(props)
    this.state = {
      repositoryList : [],
      userName : '',
      title : 'BUSQUE SEUS REPOSITÓRIOS'
    }
  }

  changeTitle = () => {
    this.setState({title : `REPOSITÓRIOS DO: ${this.state.userName}`})
  }

  searchRepositories = (event) => {
    event.preventDefault();
  
    console.log('Está buscando!')
  
    // aqui buscará o repositório do usuário
    fetch('https://api.github.com/users/' + this.state.userName + '/repos')
  
    .then(response => response.json())
  
    .then(data => this.setState({repositoryList : data}))
  
    .catch(error => console.log(error))
    
  }

  updateRepositoryName = async (repository) => 
  {
    await this.setState({userName : repository.target.value})
    console.log('está sendo armazenado no "repositoryName"!')
  }

  cleanFields = () => {
    this.setState({
        repositoryList : [],
        userName : '',
        title : 'BUSQUE SEUS REPOSITÓRIOS'
    })

    console.log('Os states foram resetados!')
  }

  render(){
    return(
      <div>
        <main>
          <section className = "search-user">
            <div className="content centralize">
              <form onSubmit = {this.searchRepositories} onClick={this.state.userName !== '' ? this.changeTitle : 'BUSQUE SEUS REPOSITÓRIOS'} className="centralize">
                <h2>{this.state.title}</h2>
                <div>
                  <input
                  type = "text"
                  value = {this.state.userName}
                  onChange = {this.updateRepositoryName}
                  placeholder = "username"
                  />
                  {
                    <button onClick={this.searchRepositories} type="submit" disabled={this.state.userName === '' ? 'none' : ''}>Buscar</button>
                  }
                  <button type="button" onClick={this.cleanFields}>Cancelar</button>
                </div>
            </form>
            </div>
          </section>

          <section className = "listing">
            <table className = "content">
              <thead>
                {/* <tr>
                  <h4>REPOSITÓRIOS DO: <span>{this.state.userName}</span></h4>
                </tr> */}
              </thead>

              <tbody>
                {
                  this.state.repositoryList.map((repository) => {
                    return(
                      <div className="repository" key={repository.id}>
                        <div className="data">
                          <p><strong>ID:</strong><br />{repository.id}</p>
                        </div>

                        <div className="data">
                          <p><strong>NOME:</strong><br />{repository.name}</p>
                        </div>

                        <div className="data">
                          <p><strong>DESCRIÇÃO:</strong><br />{repository.description}</p>
                        </div>

                        <div className="data">
                          <p><strong>CRIADO EM:</strong><br />{repository.created_at}</p>
                        </div>

                        <div className="data">
                          <p><strong>TAMANHO:</strong><br />{repository.size}</p>
                        </div>
                      </div>
                    )
                  }).reverse()
                }

              </tbody>
            </table>        
          </section>
  
        </main>
      </div>
      )
  }

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <SearchGithub />
      </header>
    </div>
  );
}

export default App;