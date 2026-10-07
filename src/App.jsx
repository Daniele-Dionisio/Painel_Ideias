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
    </>
  );
}
export default App;