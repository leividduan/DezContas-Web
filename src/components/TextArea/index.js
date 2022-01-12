import PropTypes from 'prop-types';

import { useState } from 'react';
import TextAreaBase from '../TextAreaBase';
import { CharCountText } from './styles';

export default function TextArea({ value, maxLength, onChangeFn, placeholder, error }) {
  const [textArea, setTextArea] = useState(value ?? '');
  const charCount = value ? maxLength - value.length : maxLength - textArea.length;
  function handleOnChange(event) {
    setTextArea(event.target.value);
    if (onChangeFn) {
      onChangeFn(event);
    }
  }

  return (
    <div>
      <TextAreaBase
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        onChange={handleOnChange}
        error={error}
      />
      <CharCountText>
        {charCount} / {maxLength}
      </CharCountText>
    </div>
  );
}

TextArea.propTypes = {
  value: PropTypes.any.isRequired,
  maxLength: PropTypes.number.isRequired,
  onChangeFn: PropTypes.func.isRequired,
  error: PropTypes.bool,
  placeholder: PropTypes.string,
};

TextArea.defaultProps = {
  error: false,
  placeholder: '',
};
