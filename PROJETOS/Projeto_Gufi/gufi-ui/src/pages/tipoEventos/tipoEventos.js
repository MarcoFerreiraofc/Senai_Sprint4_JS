import { Component } from 'react'

class TipoEventos extends Component{
    constructor(props){
        super(props);
        this.state = {
            // nomeState : valorInicial
            listaTipoEventos: [],
            titulo: '',
            idTipoEventoAlterado: 0
        }
    }

    // é uma declaração de "campos de classe"
    buscarTipoEventos= () => {
        console.log('agora vamos fazer a chamada para a API')

        // o "fetch" é uma API(uma função) || dentro do "fetch", estamos clicando em "send" no POSTMAN por exemplo
        fetch('http://localhost:5000/api/tipoeventos')

        // Fetch retorna uma promise que se resolve em uma resposta(response)
        // .then(resposta => console.log(resposta))

        // o método .json() retorna um objeto JavaScript
        // .then(resposta => console.log(resposta.json()))

        // define o tipo de dado do retorno da requisição (JSON)
        // então quando fizer a requisição e me trazer a resposta, vai colocar a response em JSON
        .then(resposta => resposta.json())

        // atualiza o state "listaTipoEventos" com os dados obtidos
        // pega os dados da resposta em JSON e joga dentro do array
        .then(dados => this.setState({listaTipoEventos : dados}))
        // .then(dados => console.log(dados))

        // caso ocorra algum erro, mostra no console do browser
        .catch(erro => console.log(erro))
    }

    // atualiza o state "titulo" com o valor do input
    atualizaEstadoTitulo = async (event) => {
        //         nomeEstado :     valorInput
        await this.setState({titulo : event.target.value})
        console.log(this.state.titulo)
    }

    // função responsável por cadastrar um tipo de evento
    cadastrarTipoEvento = (event) => {
        // ignora o comportamento padrão do navegador(não recarrega)
        event.preventDefault();

        // caso algum tipo de evento seja selecionado para a edição...
        // se o "idTipoEventoAlterado" for diferente de 0 (foi clicado no botão de editar...)
        if (this.state.idTipoEventoAlterado !== 0) {
            // faz a chamada para a API usando fetch e passando o ID do tipo de evento que será atualizado na URL da requisição

            // é uma edição:

            fetch('http://localhost:5000/api/tipoeventos/' + this.state.idTipoEventoAlterado, {

                // define o método da requisição (PUT)
                method: 'PUT',

                // define o corpo da requisição especificando o tipo (JSON)
                // em outras palavras, converte o state para uma string JSON
                body: JSON.stringify({tituloTipoEvento : this.state.titulo}),

                // define o cabeçalho da requisição
                headers: {
                    "Content-Type" : "application/json"
                }
            })

            // exibe no console do navegador a mensagem "Tipo de evento atualizado!"
            .then(resposta => {
                // se o status code na API for 204
                if (resposta.status === 204) {
                    console.log(
                    'Tipo de evento "' + this.state.idTipoEventoAlterado + '" atualizado!',
                    'Seu novo título agora é: "' + this.state.titulo + '"'
                )}
            })

            // se tiver algum erro, vai mostrar no console
            .catch(erro => console.log(erro))

            // então, atualiza a lista de tipo de eventos sem o usuário precisar executar outra ação
            .then(this.buscarTipoEventos)

            // faz a chamada para a função "limparCampos"
            .then(this.limparCampos)

        } 

        // se não foi clicado no botão de editar...
        else {
            // é um cadastro:

            // faz a chamada para a API usando o fetch
            fetch('http://localhost:5000/api/tipoeventos', {

                // define o método da requisição (POST)
                method: 'POST', 

                // define o corpo da requisição especificando o tipo (JSON)
                // em outras palavras, converte o state para uma string JSON
                body: JSON.stringify({tituloTipoEvento : this.state.titulo}),

                // define o cabeçalho da requisição
                headers: {
                    "Content-Type" : "application/json"
                }
            })
            // exibe no console do navegador a mensagem "Tipo de evento cadastrado!"
            .then(console.log('Tipo de evento cadastrado!'))

            // se tiver algum erro, vai mostrar no console
            .catch(erro => console.log(erro))

            // então, atualiza a lista de tipo de eventos sem o usuário precisar executar outra ação
            .then(this.buscarTipoEventos)

            // faz a chamada para a função "limparCampos"
            .then(this.limparCampos)

        }
    }

    // chama a função "buscarTipoEventos()" assim que o componente é renderizado
    componentDidMount(){
        this.buscarTipoEventos();
    }

    // recebe um tipo de evento da lista
    buscarTipoEventoPorId = (tipoEvento) => {
        this.setState({
            // atualiza o state "idTipoEventoAlterado" com o valor do id do tipo de evento recebido
            idTipoEventoAlterado : tipoEvento.idTipoEvento,
            // e o state "titulo" com o valor do título do tipo de evento recebido
            titulo : tipoEvento.tituloTipoEvento
        }, () => {
            console.log(
                // exibe no console do browser o valor do id do tipo de evento recebido,
                'O tipo de evento "' + tipoEvento.idTipoEvento + '" foi selecionado,',
                // o valor do tipo do state "idTipoEventoAlterado"
                'agora o valor do state "idTipoEventoAlterado" é "' + this.state.idTipoEventoAlterado + '"',
                // e o valor do state "titulo"
                'e o valor do state "titulo" é "' + this.state.titulo + '"'
            )
        })
    }

    // função responsável por excluir um tipo de evento
    excluirTipoEvento = (tipoEvento) => {
        console.log('Tipo de evento "' + tipoEvento.idTipoEvento + '" foi selecionado!')

        // faz a chamada para a API usando o fetch, passando o id do tipo de evento recebido na URL da requisição
        fetch('http://localhost:5000/api/tipoeventos/' + tipoEvento.idTipoEvento, {
            // define o método da requisição (DELETE)
            method : 'DELETE'
        })

        .then(resposta => {
            if (resposta.status === 204) {
                console.log('Tipo de evento "' + tipoEvento.idTipoEvento + '" excluído!')
            }
        })

        .catch(erro => console.log(erro))

        // então, atualiza a lista de tipo de eventos sem o usuário precisar executar outra ação
        .then(this.buscarTipoEventos)
    }

    // reseta os states "titulo" e "idTipoEventoAlterado"
    limparCampos = () => {
        this.setState({
            titulo : '',
            idTipoEventoAlterado : 0
        })

        console.log('Os states foram resetados!')
    }

    render(){
        return(
            <div>
                <main>
                    <section>
                        {/* Lista de tipo de eventos */}
                        <h2>Lista de tipo de eventos</h2>
                        <table>
                            <thread>
                                <tr>
                                    {/* Coluna para os IDs */}
                                    <th>#</th>
                                    {/* Coluna para os títulos */}
                                    <th>Título</th>
                                    <th>Ações</th>
                                </tr>
                            </thread>

                            <tbody>
                                {
                                    this.state.listaTipoEventos.map((tipoEvento) => {
                                        return(
                                            <tr key={tipoEvento.idTipoEvento}>
                                                <td>{tipoEvento.idTipoEvento}</td>
                                                <td>{tipoEvento.tituloTipoEvento}</td>

                                                {/* faz a chamada da função "buscarTipoEventoPorId" passando o tipo evento selecionado */}
                                                <td><button onClick={() => this.buscarTipoEventoPorId(tipoEvento)}>Editar</button></td>
                                                <td><button onClick={() => this.excluirTipoEvento(tipoEvento)}>Excluir</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </section>

                    <section>
                        {/* Cadastro de tipo de evento */}
                        <h2>Cadastro de tipo de evento</h2>
                        
                        {/* Formulário de cadastro de tipo de evento */}
                        <form onSubmit={this.cadastrarTipoEvento} >
                            <div>
                                <input 
                                type="text" 
                                value={this.state.titulo}
                                // toda vez que tiver alteração no input, o que tiver dentro do onChange vai acontecer
                                onChange={this.atualizaEstadoTitulo}
                                placeholder="Título do Tipo de Evento"
                                />

                                {/* <button type="submit" >Cadastrar</button> */}

                                {/* estrutura do IF Ternário: */}
                                {/* condição ? faço algo, caso seja verdadeiro : faço algo, caso seja falso */}
                                
                                {/* altera o botão de acordo com o a operação (editar ou cadastrar) */}
                                {/* {
                                    this.state.idTipoEventoAlterado === 0 ? <button type="submit">Cadastrar</button> : <button type="text">Atualizar</button>
                                } */}

                                {/* com o IF Ternário e o disabled ao mesmo tempo */}
                                {
                                    <button type="submit" disabled={this.state.titulo === '' ? 'none' : ''}>{this.state.idTipoEventoAlterado === 0 ? 'Cadastrar' : 'Atualizar'}</button>
                                }

                                <button type="button" onClick={this.limparCampos}>Cancelar</button>


                            </div>
                        </form>

                        {/* caso algum tipo de evento tenha sido selecionado para a edição, será exibido uma mensagem de feedback para o usuário */}
                        {
                            this.state.idTipoEventoAlterado !== 0 && 
                            <div>
                                <p>O tipo de evento '{this.state.idTipoEventoAlterado}' está sendo editado!</p> 
                                <p>Clique em "Cancelar" a operação antes de cadastrar um novo tipo de evento.</p>
                            </div>
                        }
                    </section>

                </main>
            </div>
        );
    }

}

export default TipoEventos;