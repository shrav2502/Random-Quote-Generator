import React from "react";

class Template extends React.Component {
  constructor() {
    super();
  }
  render() {
    const backgroundColor = this.props.displayColor();
    return (
      <div>
        <div
          className="parent"
          style={{ backgroundColor: backgroundColor, color: "white" }}
        >
          <div className="quotes">"{this.props.items}"</div>
        </div>
        <div className="authors" style={{ color: backgroundColor }}>
          ~{this.props.author}
        </div>
      </div>
    );
  }
}

export default Template;
