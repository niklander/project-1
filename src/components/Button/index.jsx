import P from 'prop-types';
import "./styles.css";

// eslint-disable-next-line react/prop-types
export const Button = ({ text,  onClick, disabled = false }) => (
  // eslint-disable-next-line react/react-in-jsx-scope
  <button className='button' onClick={onClick} disabled={disabled}> {text} </button>
);

Button.default.propTypes = {
  disabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  disabled:P.bool,
};

