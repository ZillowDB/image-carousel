import React from 'react';
import PropTypes from 'prop-types';
import { leftArrowBlock, left } from './LeftArrow.css';

const LeftArrow = (props) => {
  const { goBack } = props;
  return (
    <span className={leftArrowBlock} onClick={goBack}>
      <i className="fas fa-angle-left" id={left} />
    </span>
  );
};

LeftArrow.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default LeftArrow;
