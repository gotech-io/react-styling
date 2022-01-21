import PropTypes from 'prop-types';

const styles = {
  fillButton: {
    fontSize: 20,
    fontWeight: 200,
    letterSpacing: 1,
    padding: '13px 50px 13px',
    outline: 0,
    border: '1px solid black',
    cursor: 'pointer',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0)',

    // THIS DOES NOT WORK IN REACT 😢
    '::after': {
      content: '',
      backgroundColor: '#80f0dd',
      width: '100%',
      zIndex: -1,
      position: 'absolute',
      height: '100%',
      top: 7,
      left: 7,
      transition: '0.2s',
    },

    // React does not support Pseudo-elements 😢
    ':hover::after': {
      top: 0,
      left: 0,
    },
  },
};

const InlineStyleButton = ({ onClick, text }) => {
  return (
    <button style={styles.fillButton} onClick={onClick}>
      {text}
    </button>
  );
};

InlineStyleButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default InlineStyleButton;
