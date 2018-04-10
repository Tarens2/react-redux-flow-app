import React from 'react';
import MaskedInput from 'react-text-mask';
import PropTypes from 'prop-types';

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;
  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        '+',
        '7',
        '(',
        /[1-9]/,
        /\d/,
        /\d/,
        ')',
        '-',
        /\d/,
        /\d/,
        /\d/,
        '-',
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={'\u2000'}
      // showMask
    />
  );
};

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

export default TextMaskCustom;
