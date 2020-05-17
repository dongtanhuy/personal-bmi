import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

const Input = ({
  onChange,
  value,
  label,
  placeholder,
}) => (
  <div className="Input">
    <label className="Input__label" htmlFor={label}>{label}</label>
    <input className="Input__input" id={label} type="number" onChange={onChange} value={value} placeholder={placeholder} />
  </div>
);


Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
export default Input;
