import React, { Component } from "react";

class CounterCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    const themeColor = `${this.props.data.color}`;
    const btnStyle = `btn ${themeColor}`;
    const cardStyle = {
      borderTop: "none",
      borderBottom: "none",
      marginBottom: "16px",
      backgroundColor: "whitesmoke",
      boxShadow: `2px 2px 4px 1px ${themeColor}`
    };
    return (
      <div style={cardStyle}>
        <div style={headerStyle}>
          <h2 style={header}>{this.props.data.name}</h2>
          <span style={{ float: "right", margin: "10px" }}>
            {this.state.count}
          </span>
        </div>
        <h2 style={counterStyle}> {this.state.count}</h2>
        <button onClick={this.handleClick} className={btnStyle}>
          Click Me
        </button>
      </div>
    );
  }
}

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  fontSize: "18px",
  textAlign: "left",
  padding: "10px"
};

const header = {
  display: "inline-block",
  marginLeft: "16px"
};

const counterStyle = {
  marginTop: "16px",
  fontWeight: "900"
};

export default CounterCard;
