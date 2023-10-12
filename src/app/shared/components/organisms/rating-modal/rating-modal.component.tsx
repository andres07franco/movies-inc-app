import React, { useMemo, useState } from 'react';
import { Modal, ActionButton } from '../../molecules';
import { StarRate, ModalBody, ModalFooter } from '../../atoms';
import { RateWrapper, Detail } from './rating-modal.style';
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
  /// Generate the values for each star, 2,4,6,8,10
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
      <ModalBody>
        <Detail type="Subtitle" color="neutral100">
          {t('saveRatingTitle')}
        </Detail>
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
    </Modal>
  );
};

RatingModal.defaultProps = {
  testID: 'rating-modal',
};
export default RatingModal;
