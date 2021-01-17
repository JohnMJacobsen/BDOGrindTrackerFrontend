import React from "react";
import "./Personal.css";
import SelectZone from "../../components/SelectZone";
import SessionForm from "../../components/SessionForm";
import GrindHistory from "../../components/GrindHistory";

class Personal extends React.Component {
  constructor() {
    super();
    this.handleZoneChange = this.handleZoneChange.bind(this);

    this.state = {
      sessionLocation: "",
    };
  }

  async handleZoneChange(res) {
    await new Promise((resolve) =>
      this.setState({ sessionLocation: res }, () => resolve())
    );
  }

  render() {
    return (
      <div className="page__container">
        <SelectZone onZoneChange={this.handleZoneChange} />
        <br />
        <br />
        <br />
        <br />

        <SessionForm sessionLocation={this.state.sessionLocation} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <GrindHistory />
      </div>
    );
  }
}

export default Personal;
