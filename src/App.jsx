import { useState } from 'react'


function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function Adicionar(event) {
    event.preventDefault();
    if (!novaIdeia.trim()) {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }

    const ideia = {
      id: Date.now(),
      texto: novaIdeia.trim(),
      feita: false
    }

    setIdeias([...ideias, ideia]);
    setNovaIdeia("");
    setErro("");
  }

  function alterar(id) {
    setIdeias(
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
      ideias.filter((ideia) => ideia.id !== id)
    )
  }
  const total = ideias.length
  const concluidas = ideias.filter(
    (ideia) => ideia.feita).length;


  return (
    <>
      <h1>Painel de Ideias</h1>


      <form onSubmit={Adicionar}>
        <input
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

        
        {ideias.map((ideia) => (
          <div id='item' key={ideia.id}>
            <input type="checkbox"
              checked={ideia.feita}
              onChange={() => alterar(ideia.id)}
            />

            <span className={ideia.feita ? "concluida" : ""}>
              {ideia.texto}
            </span>

             <button type="button" id='BotaoRemover' onClick={() => remover (ideia.id)}> ✕ </button>

           
          </div>
        ))}
        <footer>
              {`${total} ideias · ${concluidas} concluídas`}
            </footer>
      </section>


    </>


  )
}
export default App;