import React from 'react';
import { Keyboard } from 'react-native';
import * as yup from 'yup';
import { useTranslation } from '@translations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginParams } from '@core/authentication/domain/dtos/login-params.dto';
import { ModalBody, ModalFooter } from '@ui-components/atoms';
import { Modal, ActionButton, FieldInput } from '@ui-components/molecules';
import { useSignIn } from '../../hooks';

const schema = yup.object().shape({
  username: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

interface Props {
  testID?: string;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
}
export const SessionModal: React.FC<Props> = ({
  testID,
  modalVisible,
  setModalVisible,
}) => {
  const { loading, signIn } = useSignIn();
  const { t } = useTranslation();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleCancel = () => {
    reset();
    setModalVisible(false);
  };
  const handlePressSiginAsync = async (formData: LoginParams) => {
    Keyboard.dismiss();
    await signIn(formData, handleCancel);
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
        <FieldInput
          control={control}
          name="username"
          label="Username"
          hasError={!!errors.username}
          errorMessage={errors.username?.message ?? ''}
        />
        <FieldInput
          control={control}
          name="password"
          label="Password"
          hasError={!!errors.password}
          errorMessage={errors.password?.message ?? ''}
          secureTextEntry
        />
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
          disabled={loading}
          onPressAsync={handleSubmit(handlePressSiginAsync)}
          title={t('Login')}
        />
      </ModalFooter>
    </Modal>
  );
};

SessionModal.defaultProps = {
  testID: 'session-modal',
};
export default SessionModal;
