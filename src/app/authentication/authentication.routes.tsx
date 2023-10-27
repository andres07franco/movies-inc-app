import React from 'react';
import { ProfileModal, SessionModal } from './screen';
import {
  useAuthModalSelector,
  useSessionSelector,
} from '@shared/redux/selectors';
import { useDispatch } from 'react-redux';
import { hideModal, showModal } from '@shared/redux/slices';

export function AuthenticationRoutes() {
  const dispatch = useDispatch();
  const { visible } = useAuthModalSelector();
  const { sessionStarted } = useSessionSelector();
  const handleModal = (show: boolean) => {
    dispatch(show ? showModal() : hideModal());
  };
  const Modal = sessionStarted ? ProfileModal : SessionModal;
  return <Modal modalVisible={visible} setModalVisible={handleModal} />;
}
