import React from 'react';
import PropTypes from 'prop-types';

const TextInputTypes = () => <>Text Input</>;

TextInputTypes.propTypes = {
  // prefix: PropTypes.node,
  // suffix: PropTypes.node,
  isAutocomplete: PropTypes.bool,
  defaultValue: PropTypes.string,
  id: PropTypes.string,
  isDisabled: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isReadonly: PropTypes.bool,
  // isSpellcheck: PropTypes.bool,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  mode: PropTypes.oneOf(['light', 'grey']),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  value: PropTypes.string,
  type: PropTypes.oneOf(['text', 'search']),
};

TextInputTypes.defaultProps = {
  isAutocomplete: false,
  isDisabled: false,
  isFullWidth: false,
  isInvalid: false,
  isReadonly: false,
  mode: 'light',
  // size: 'medium',
};

export default TextInputTypes;
