import React from 'react';
import PropTypes from 'prop-types';
import { rightArrowBlock, right } from './RightArrow.css';

const RightArrow = (props) => {
  const { goForward } = props;
  return (
    <span className={rightArrowBlock} onClick={goForward}>
      <i className="fas fa-angle-right" id={right} />
    </span>
  );
};

RightArrow.propTypes = {
  goForward: PropTypes.func.isRequired,
};

export default RightArrow;
