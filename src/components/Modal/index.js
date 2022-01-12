import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal({ title, body, confirmLabel, handleConfirm, handleClose, danger }) {
  return ReactDom.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>
        <p>{body}</p>
        <Footer>
          <button type="button" className="cancel-button" onClick={handleClose}>
            Cancelar
          </button>
          <Button danger={danger} type="button" onClick={handleConfirm}>
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  confirmLabel: PropTypes.string.isRequired,
  handleConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  danger: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
};
