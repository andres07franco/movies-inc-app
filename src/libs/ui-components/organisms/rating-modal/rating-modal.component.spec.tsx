import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RatingModal from './rating-modal.component';

jest.mock('@translations', () => ({
  useTranslation: () => ({
    t: jest.fn((x: string) => x),
  }),
}));

const mockSetModalVisible = jest.fn();
const mockOnSaveRateAsync = jest.fn();

describe('<RatingModal />', () => {
  it('renders correctly', () => {
    const tree = render(
      <RatingModal
        modalVisible={true}
        setModalVisible={mockSetModalVisible}
        onSaveRateAsync={mockOnSaveRateAsync}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should disable the button when there is not rating', () => {
    const { getByTestId } = render(
      <RatingModal
        modalVisible={true}
        setModalVisible={mockSetModalVisible}
        onSaveRateAsync={mockOnSaveRateAsync}
      />,
    );
    const saveRateButton = getByTestId('save-rate-button');
    fireEvent.press(saveRateButton);
    expect(mockOnSaveRateAsync).toBeCalledTimes(0);
  });

  it('should enable the button and save when there is rating', () => {
    const { getByTestId } = render(
      <RatingModal
        modalVisible={true}
        setModalVisible={mockSetModalVisible}
        onSaveRateAsync={mockOnSaveRateAsync}
      />,
    );
    const saveRateButton = getByTestId('save-rate-button');

    const starRate = getByTestId('star-rate-4');
    fireEvent.press(starRate);

    fireEvent.press(saveRateButton);
    expect(mockOnSaveRateAsync).toBeCalledTimes(1);
  });

  it('should cancel and hide the modal', () => {
    const { getByTestId } = render(
      <RatingModal
        modalVisible={true}
        setModalVisible={mockSetModalVisible}
        onSaveRateAsync={mockOnSaveRateAsync}
      />,
    );
    const cancelButton = getByTestId('acction-button');
    fireEvent.press(cancelButton);
    expect(mockSetModalVisible).toBeCalledWith(false);
  });
});
