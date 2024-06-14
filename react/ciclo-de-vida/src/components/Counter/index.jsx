import React from "react";

export class Counter extends React.Component {
  constructor() {
    super()

    console.log("Construindo a classe Counter")
  }

  // essa função está sendo descontinuada
  UNSAFE_componentWillMount() {
    console.log("O nosso componente contador será montado ")
  }

  // atualmente, essa função substitui a de cima
  componentDidMount() {
    console.log("O componente foi montado ✅")
  }

  render() {
    console.log("Renderizando o componente counter...")
    return (
      <div>
        <h1>0</h1>

        <button>Diminuir</button>
        <button>Aumentar</button>
      </div>
    )
  }
}