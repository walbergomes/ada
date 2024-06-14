import React from "react";

import { Counter } from './components/Counter'

class App extends React.Component {
  constructor() {
    super();

    this.state = { showCounter: false };
  }

  render() {
    return (
      <div className="App">
        <h1>Ciclo de Vida no React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {
            this.state.showCounter ? 'Remover contador' : 'Mostrar contador'
          }
        </button>

        {
          // outra forma de fazer
          this.state.showCounter && <Counter /> 
        }
        
      </div>
    );
  }
}

export default App;
