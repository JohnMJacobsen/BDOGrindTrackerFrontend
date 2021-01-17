import React from "react";
import "./SessionForm.css";
import * as Drops from "../data.js";

export default class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drops: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
  }

  handleSubmit(event) {
    console.log(event);
  }

  async componentDidUpdate(previousProps) {
    if (previousProps.sessionLocation !== this.props.sessionLocation) {
      let dropData = [];
      Drops[this.props.sessionLocation].locationDrops.map((obj) => {
        return dropData.push({ name: obj, quantity: "0" });
      });
      await new Promise((resolve) =>
        this.setState({ drops: dropData }, () => resolve())
      );
    }
  }

  renderInputForm = (session, index) => {
    return (
      <div key={index}>
        <p>{session.name}</p>
        <input type="number" onChange={this.handleInputChange}></input>
      </div>
    );
  };

  render() {
    let submitButton;
    if (this.state.drops.length > 0) {
      submitButton = <button type="button">Submit</button>;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div>{this.state.drops.map(this.renderInputForm)}</div>
        {submitButton}
      </form>
    );
  }
}
