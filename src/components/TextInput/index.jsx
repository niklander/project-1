import P from "prop-types";

import "./style.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      value={searchValue}
      type="search"
      placeholder="Type Your Search "
    />
  );
};

TextInput.propTypes = {
  searchValue:P.string.isRequired,
  handleChange: P.func.isRequired,
}
