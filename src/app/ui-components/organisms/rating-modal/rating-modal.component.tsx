import React, { useMemo, useState } from 'react';
import { ActionButton } from '../../molecules';
import { StarRate } from '../../atoms';
import { Modal } from 'react-native';
import {
  Container,
  ModalContent,
  ModalBody,
  ModalFooter,
  RateWrapper,
  Title,
} from './rating-modal.style';
import { useTranslation } from '@translations';

interface Props {
  testID?: string;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  onSaveRateAsync: (rate: number) => Promise<void>;
}
export const RatingModal: React.FC<Props> = ({
  testID,
  modalVisible,
  setModalVisible,
  onSaveRateAsync,
}) => {
  const { t } = useTranslation();

  const [rate, setRate] = useState(0);
  const rateArray: number[] = useMemo(
    () => Array.from({ length: 5 }, (_, index) => (index + 1) * 2),
    [],
  );
  const handleCancelRate = () => {
    setModalVisible(false);
    setRate(0);
  };
  const handleSaveRateAsync = async () => {
    await onSaveRateAsync(rate);
    setRate(0);
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
      <Container>
        <ModalContent>
          <ModalBody>
            <Title type="Subtitle" color="neutral100">
              {t('saveRatingTitle')}
            </Title>
            <RateWrapper>
              {rateArray.map((rt) => (
                <StarRate
                  testID={`star-rate-${rt}`}
                  key={rt}
                  size="big"
                  filled={rate >= rt}
                  onPress={() => setRate(rt)}
                />
              ))}
            </RateWrapper>
          </ModalBody>
          <ModalFooter>
            <ActionButton
              type="secondary"
              onPress={handleCancelRate}
              title={t('cancelButtonTitle')}
            />
            <ActionButton
              testID="save-rate-button"
              type="primary"
              disabled={rate === 0}
              onPressAsync={handleSaveRateAsync}
              title={t('saveRatingButtonTitle')}
            />
          </ModalFooter>
        </ModalContent>
      </Container>
    </Modal>
  );
};

RatingModal.defaultProps = {
  testID: 'rating-modal',
};
export default RatingModal;
