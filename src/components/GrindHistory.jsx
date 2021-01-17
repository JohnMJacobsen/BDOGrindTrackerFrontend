import React from "react";
import "./GrindHistory.css";
import * as Drops from "../data.js";

const allSessions = [
  { location: "Stars End", drops: [100, 1, 50, 32, 521, 323, 393] },
  { location: "Stars End", drops: [100, 1, 50, 32, 521, 323, 393] },
  { location: "Stars End", drops: [100, 1, 50, 32, 521, 323, 393] },
  { location: "Stars End", drops: [100, 1, 50, 32, 521, 323, 393] },
];

let locationDrops = [];

export default class GrindHistory extends React.Component {
  constructor(props) {
    super(props);
    locationDrops = Drops.AshForest;
  }
  renderSessionHeader = (session, index) => {
    return <th key={index}>{session}</th>;
  };

  renderSessionBody = (session, index) => {
    return (
      <tr key={index}>
        {session.drops.map((res, index) => {
          return <td key={index}>{res}</td>;
        })}
      </tr>
    );
  };

  render() {
    return (
      <table className="table__container">
        <thead className="table__header">
          <tr>{locationDrops.locationDrops.map(this.renderSessionHeader)}</tr>
        </thead>
        <tbody>{allSessions.map(this.renderSessionBody)}</tbody>
      </table>
    );
  }
}
