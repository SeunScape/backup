import PropTypes from 'prop-types';
import React from 'react';
 
const BackButton = (props) => {
  const { dest, text } = props;

  return (
    <button color="black"variant="secondary" href={`${dest}`}>{text}</button>
  );
};

BackButton.propTypes = {
  dest: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default BackButton;