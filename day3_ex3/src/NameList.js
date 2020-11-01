import React from "react";
import PropTypes from "prop-types";

const NameList = ({ names }) => {
  return (
    <React.Fragment>
      <h2>All Todos</h2>
      <ul>
        {names.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default NameList;

NameList.propTypes = {
  todos: PropTypes.array,
};
