# Painel de Ideias
Aplicação que utiliza a biblioteca React no desenvolvimento de site estilo to-do list para a anotação de ideias. Você pode digitar uma ideas, adiciona-la a lista, marcar como concluida e a excluir quando quiser. No rodapé é mostrado quantas ideias existem e quantas já foram concluidas.

## Funcionalidades

- Adicionar uma nova ideia pelo formulário (botão **Adicionar**)
- Validação: se o campo estiver vazio, aparece a mensagem "Digite sua ideia antes de adicionar."
- Marcar e desmarcar uma ideia como concluída (o texto fica tachado)
- Remover uma ideia da lista com o botão ✕
- Contador de ideias totais e concluídas no rodapé

## Como funciona o código

Todo o projeto está no componente `App` (`App.jsx`), que usa o hook `useState` para guardar três estados:

| Estado | O que guarda |
| --- | --- |
| `ideias` | Lista de ideias. Cada uma tem `id`, `texto` e `feita` |
| `novaIdeia` | Texto digitado no campo de entrada |
| `erro` | Mensagem de erro exibida quando o campo está vazio |

Funções principais:
- `Adicionar(event)`: valida o campo, cria uma ideia com `id` gerado por `Date.now()` e `feita: false`, e adiciona à lista.
- `alterar(id)`: inverte o valor de `feita` da ideia escolhida.
- `remover(id)`: remove da lista a ideia com o `id` informado.


## Estrutura

```
src/
├── App.jsx   # arquivo com toda a lógica de programação e o HTML
└── index.css  # estilos do painel
```

## Como rodar

Você precisa ter o [Node.js] instalado.

No terminal rode:
```
npm install
npm run dev
```

Depois, abra no navegador, ou no proprio VS Code, o endereço que aparecer no terminal.

## Tecnologias

- React
- Vite
- CSS