import React from "react";
import Template from "./Template";
import Quotes from "./Quotes";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: Quotes,
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
    this.randomColor = this.randomColor.bind(this);
  }

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }

  handleClick() {
    const { quotes } = this.state;
    let random = Math.floor(Math.random() * quotes.length);
    console.log(random);
    this.setState({
      count: random,
    });
  }

  render() {
    const { quotes } = this.state;
    const updateQuote = quotes.map((item) => {
      return item.quote;
    });
    const updateAuthor = quotes.map((item) => {
      return item.author;
    });

    return (
      <div className="container">
        <Template
          displayColor={this.randomColor}
          items={updateQuote[this.state.count]}
          author={updateAuthor[this.state.count]}
        />
        <button onClick={this.handleClick}>New Quote</button>
      </div>
    );
  }
}

export default Main;
