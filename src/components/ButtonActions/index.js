import PropTypes from 'prop-types';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActionButton, ActionOptions } from './styles';

import treeDots from '../../assets/images/icons/tree-dots.svg';

export default function ButtonActions({ actions }) {
  const [showOptions, setShowOptions] = useState(false);
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const buttonRef = useRef();

  function handleOnClick() {
    setLeft(buttonRef.current.getBoundingClientRect().left);
    setTop(buttonRef.current.getBoundingClientRect().top);
    setShowOptions((prevState) => !prevState);
  }

  function handleOnBlur(e) {
    if (e.relatedTarget == null) {
      setShowOptions(false);
    }
  }
  return (
    <>
      <ActionButton type="button" ref={buttonRef} onClick={handleOnClick} onBlur={handleOnBlur}>
        <img src={treeDots} alt="tree dots" />
      </ActionButton>
      {showOptions && (
        <ActionOptions left={left} top={top}>
          {actions.map((action) => (
            <Link key={action.name} to={action.to} className={action.className} onClick={action.onClick}>
              {action.name}
            </Link>
          ))}
        </ActionOptions>
      )}
    </>
  );
}

ButtonActions.propTypes = {
  actions: PropTypes.array.isRequired,
};
