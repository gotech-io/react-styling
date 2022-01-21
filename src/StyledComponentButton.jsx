import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 13px 50px 13px;
  outline: 0;
  border: 1px solid black;
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);

  ::after {
    content: '';
    background-color: #80f0dd;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    left: 7px;
    transition: 0.2s;
  }

  :hover::after {
    top: 0px;
    left: 0px;
  }
`;

const StyledComponentButton = ({ onClick, text }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

StyledComponentButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default StyledComponentButton;
