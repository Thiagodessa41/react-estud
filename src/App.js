import React, {Component} from 'react';
import './App.css';
import Comentario from './components/cometario';

class App extends Component {

  state={
    comentarios:[
      {
      nome:'João',
      email:'joao@mail.com',
      data: new Date(2020, 3, 19),
      mensagem: 'Olá, tudo bem?'
      },
      {
        nome:'Pedro',
        email:'Pedro@mail.com',
        data: new Date(2020, 3, 20),
        mensagem: 'Olá, tudo bem sim...'
        }
    ]
  }
 // para adicionar um novo comentario
  adicionarComentario = () =>{
    const novoComentario = {
      nome: 'Maria',
      email:'maria@gmail.com',
      data: new Date(),
      mensagem:'Ola pessoal..'
    }
    this.setState({comentarios: [...this.state.comentarios, novoComentario]})
  }

 

  render(){
    return (
      <div className="App">
       <h1>Meu projeto</h1>
      {this.state.comentarios.map((comentario,indice) =>(
        <Comentario
        key={indice}
        nome={comentario.nome}
        email={comentario.email}
        data={comentario.data}>
        {comentario.mensagem}
        </Comentario>
      ))}   
      
             <button onClick={this.adicionarComentario}>Adicionar um comentário</button>
      </div>
      );
  }
 
}

export default App;
