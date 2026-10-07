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


  return (
    <>
      <h1>Painel de Ideias</h1>


      <form onSubmit={Adicionar}>
        <input
          type="text"
          placeholder="Digite sua ideia"
          value={novaIdeia}
          onChange={(event) => setNovaIdeia(event.target.value)}
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      {erro && <p>{erro}</p>}

      <div>
        {ideias.map((ideia) => (
          <div key={ideia.id}>
            <input type="checkbox"
              checked={ideia.feita}
              onChange={() => aoAlternarIdeia(ideia.id)}
            />

            <span className={ideia.feita ? "concluida" : ""}>
              {ideia.texto}
            </span>

            <button>✕</button>
          </div>
        ))}
      </div>


    </>


  )
}
export default App;