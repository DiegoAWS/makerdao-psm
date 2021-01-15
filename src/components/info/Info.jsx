import React from 'react';
import PropTypes from 'prop-types';
import '../input/Input.scss';
import './Info.scss';

const Info = ({
  value, img, children, left,
}) => (
  <div className={`Input Info ${img ? 'HasImg' : ''} ${left ? 'Left' : ''}`}>
    {img && <img className="Img" src={img} alt="Icon" />}
    {!children && value}
    {children && children}
  </div>
);

Info.propTypes = {
  value: PropTypes.string,
  img: PropTypes.string,
  children: PropTypes.element,
  left: PropTypes.bool,
};

Info.defaultProps = {
  value: '',
  img: '',
  left: false,
  children: undefined,
};

export default Info;
