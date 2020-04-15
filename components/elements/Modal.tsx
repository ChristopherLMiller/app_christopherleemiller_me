import Modal from 'react-modal';
import { FunctionComponent, ReactNode, MouseEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

// used for targetting the modal for screen readers
Modal.setAppElement('#__next');

// Set some default styles to the modal
const ModalStyles = {
  overlay: {
    background: '#131313bf',
    zIndex: 9999,
  },
  content: {
    top: '20%',
    left: '25%',
    bottom: '20%',
    right: '25%',
    borderRadius: 'none',
    border: 'none',
    outline: '10px solid var(--main-color-transparent)'
  }
}

export const ModalLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const ModalLayoutColumn = styled.div`
  padding: 0 20px;

  &first
`;

export const ModalLayoutHeader = styled.h3`
  color: var(--main-color);
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
`;

interface iModalBox {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  onRequestClose?(event: (MouseEvent | KeyboardEvent)): void;
}

const ModalBox: FunctionComponent<iModalBox> = ({ isOpen, title, children, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      style={ModalStyles}
      contentLabel={title}
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={onRequestClose}
    >
      <ModalLayout>
        {children}
      </ModalLayout>
    </Modal>
  );
}

export { ModalBox };