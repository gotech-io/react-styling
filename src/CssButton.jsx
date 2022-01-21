import PropTypes from 'prop-types';
import './CssButton.css';

const CssButton = ({ onClick, text }) => {
  return (
    <button className="fill-button" onClick={onClick}>
      {text}
    </button>
  );
};

CssButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CssButton;
