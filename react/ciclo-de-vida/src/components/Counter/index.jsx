import React from "react";

export class Counter extends React.Component {
  constructor() {
    super();

    this.state = { contador: 0 };

    console.log("Construindo a classe Counter");
  }

  // essa função está sendo descontinuada
  UNSAFE_componentWillMount() {
    console.log("O nosso componente contador será montado ");
  }

  // atualmente, essa função substitui a de cima
  componentDidMount() {
    console.log("O componente foi montado ✅");

    document.addEventListener("scroll", this.consoleScroll)
  }

  // método chamado sempre que uma prop ou estado for atualizado
  shouldComponentUpdate() {
    if(this.state.contador === 2) return false
    return true

    // return true
    // return false
  }

  // essa função será descontinuada
  UNSAFE_componentWillUpdate() {
    console.log("O componente será atualizado!")
  }

  componentDidUpdate() {
    console.log("O componente foi atualizado ✅")
  }

  componentWillUnmount() {
    console.log("O componente será desmonstado...")

    document.removeEventListener("scroll", this.consoleScroll)
  }

  consoleScroll() {
    console.log("Rolando a página...")
  }

  render() {
    console.log("Renderizando o componente counter...");
    return (
      <div>
        <h1>{this.state.contador}</h1>

        <button
          onClick={() => this.setState({ contador: this.state.contador - 1 })}
        >
          Diminuir
        </button>

        <button
          onClick={() => this.setState({ contador: this.state.contador + 1 })}
        >
          Aumentar
        </button>
      </div>
    );
  }
}
