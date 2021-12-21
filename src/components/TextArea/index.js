import PropTypes from 'prop-types';

import { useState } from 'react';
import TextAreaBase from '../TextAreaBase';

export default function TextArea({ maxLength, onChangeFn }) {
  const [textArea, setTextArea] = useState('');
  function handleOnChange(event) {
    setTextArea(event.target.value);
    if (onChangeFn) {
      onChangeFn(event);
    }
  }

  return (
    <div>
      <TextAreaBase value={textArea} maxLength={maxLength} onChange={handleOnChange} />
      <small>
        {maxLength - textArea.length} / {maxLength}
      </small>
    </div>
  );
}

TextArea.propTypes = {
  maxLength: PropTypes.number.isRequired,
  onChangeFn: PropTypes.func.isRequired,
};
