import React from "react";
import { Navbar } from "./components/Navbar/Navbar";

import "./styles/App.css";
import { Article } from "./components/Article/Article";
import { Counter } from "./components/Counter/Counter";

// Componente em classe é uma classe que herda a classe Component do React,
// e retorna HTML dentro do método render.

import article1 from './assets/images/article1.png'
import article2 from './assets/images/article2.png'
import article3 from './assets/images/article3.png'

class App extends React.Component {
  // Método responsável por renderizar o conteúdo HTML do nosso componente
  render() {
    return (
      <>
        <Navbar />

        <Counter />

        {/* <section id="articles">
          <Article 
            title="Designing Dashboards" 
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1}
          />

          <Article 
            title="Vibrant Portraits of 2020" 
            provider="SpaceNews"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article2}
          />

          <Article 
            title="36 Days of Malayalam type" 
            provider="Spaceflight Now"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article3}
          />

          <Article 
            title="Designing Dashboards" 
            provider="NASA"
            description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            thumbnail={article1}
          />
        </section> */}
      </>
    );
  }
}

export default App;
