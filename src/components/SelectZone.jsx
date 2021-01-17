import React from "react";
import "./SelectZone.css";

export default class SelectZone extends React.Component {
  constructor(props) {
    super(props);
    this.handleZoneChange = this.handleZoneChange.bind(this);
  }

  handleZoneChange(e) {
    this.props.onZoneChange(e.target.value);
  }

  render() {
    return (
      <div className="select__container">
        <div className="select">
          <select onChange={this.handleZoneChange} defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              Select Grind Location ...
            </option>
            <option value="StarsEnd">Stars End</option>
            <option value="AshForest">Ash Forest</option>
          </select>
        </div>
      </div>
    );
  }
}
