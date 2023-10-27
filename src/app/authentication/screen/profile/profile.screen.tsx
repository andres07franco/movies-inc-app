import React from 'react';
import { useDispatch } from 'react-redux';
import { useSessionSelector } from '@shared/redux/selectors';
import { logOut } from '@shared/redux/slices';
import { useTranslation } from '@translations';
import { ModalBody, ModalFooter } from '@ui-components/atoms';
import { Modal, ActionButton } from '@ui-components/molecules';
import ProfileCricleBigIcon from '@assets/profile-circle-big.svg';
import { Detail, Wrapper } from './profile.style';

interface Props {
  testID?: string;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}
export const ProfileModal: React.FC<Props> = ({
  testID,
  modalVisible,
  setModalVisible,
}) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { session } = useSessionSelector();
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handlePressLogout = () => {
    setModalVisible(false);
    dispatch(logOut());
  };

  return (
    <Modal
      testID={testID}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <ModalBody>
        <Wrapper>
          <ProfileCricleBigIcon />
          <Detail type="Subtitle" color="neutral100">
            {session.username}
          </Detail>
        </Wrapper>
      </ModalBody>
      <ModalFooter>
        <ActionButton
          type="secondary"
          onPress={handleCancel}
          title={t('cancelButtonTitle')}
        />
        <ActionButton
          testID="save-rate-button"
          type="primary"
          onPress={handlePressLogout}
          title={t('Logout')}
        />
      </ModalFooter>
    </Modal>
  );
};

ProfileModal.defaultProps = {
  testID: 'profile-modal',
};
export default ProfileModal;
