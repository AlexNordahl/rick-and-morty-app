import React from "react";
import { Dropdown } from "semantic-ui-react";

const Filter = ({ setStatusFilter }) => {
  const options = [
    { key: "all", text: "All", value: "" },
    { key: "alive", text: "Alive", value: "alive" },
    { key: "dead", text: "Dead", value: "dead" },
    { key: "unknown", text: "Unknown", value: "unknown" },
  ];

  return (
    <Dropdown
      placeholder="Filter by status"
      selection
      options={options}
      onChange={(e, { value }) => setStatusFilter(value)}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default Filter;