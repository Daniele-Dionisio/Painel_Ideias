import { useState } from 'react'

function App() {

  //O useState permite que a const guarde uma informação e seja atualizado
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function adicionar(event) {
    event.preventDefault();   //Impede que o navegador recarregue
    
    //Verifica se a ideia está vazia
    if (!novaIdeia.trim()) {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }

    // Estrutura de cada ideia
    const ideia = {
      id: Date.now(), //Cria um id com base no horario do momento
      texto: novaIdeia.trim(),   //Armazena o texto da ideia
      feita: false    //Armazena o estado da ideia, se ela foi concluida ou não
    }

    setIdeias([...ideias, ideia]);
    setNovaIdeia("");
    setErro("");
  }

  function alterar(id) {
    setIdeias(
      //Percorre ideia por ideia até encontrar qual atende a condição e altera o seu estado
      ideias.map((ideia) => {
        if (ideia.id === id) {
          return {
            ...ideia,
            feita: !ideia.feita
          }
        }
        return ideia;

      })
    );
  }

  function remover(id) {
    setIdeias(
      //Filtra as ideias excluindo as que não atendem a condição
      ideias.filter((ideia) => ideia.id !== id)
    )
  }

  //Lê o total de ideias e depois filtra as com o estado 'TRUE'
  const total = ideias.length
  const concluidas = ideias.filter(
    (ideia) => ideia.feita).length;


  return (
    <>
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionar}>
        <input
        //Pega o que o usuário digitou e atualiza 'novaIdeia'
          type="text"
          placeholder="Digite sua ideia"
          value={novaIdeia}
          onChange={(event) => {
            setNovaIdeia(event.target.value);
            setErro("");
          }}
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      <div id='erro'> {erro && <p>{erro}</p>} </div>

      <section id='caixa'>

        //Percorre e separa cada elemento da lista
        {ideias.map((ideia) => (
          <div id='item' key={ideia.id}>
            //Botão que ao clicar chama a função 'alterar'
            <input type="checkbox"
              checked={ideia.feita}
              onChange={() => alterar(ideia.id)}
            />
            
            //Verifica o estado da ideia, se for 'TRUE' aplica o CSS
            <span className={ideia.feita ? "concluida" : ""}>
              {ideia.texto}
            </span>

            <button type="button" id='BotaoRemover' onClick={() => remover(ideia.id)}> ✕ </button>
          </div>
        ))}

        //Contador de ideias totais e ideias concluidas
        <footer>
          {`${total} ideias · ${concluidas} concluídas`}
        </footer>

      </section>

    </>
  )
}
export default App;