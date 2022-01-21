import PropTypes from 'prop-types';
import styles from './CssModuleButton.module.css';

const CssModuleButton = ({ onClick, text }) => {
  return (
    <button className={styles['fill-button']} onClick={onClick}>
      {text}
    </button>
  );
};

CssModuleButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default CssModuleButton;
