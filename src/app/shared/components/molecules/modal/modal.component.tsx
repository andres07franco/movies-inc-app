import React from 'react';
import { ModalProps, Modal as ReactModal } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Container, ModalContent } from './modal.style';

interface Props {
  children: JSX.Element | JSX.Element[] | boolean;
}
export const Modal: React.FC<ModalProps & Props> = (props) => {
  return (
    <ReactModal {...props} animationType="slide" transparent={true}>
      <RootSiblingParent>
        <Container>
          <ModalContent>{props.children}</ModalContent>
        </Container>
      </RootSiblingParent>
    </ReactModal>
  );
};

export default Modal;
