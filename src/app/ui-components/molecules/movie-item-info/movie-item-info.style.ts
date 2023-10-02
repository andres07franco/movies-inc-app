import Typography from '@ui-components/atoms/typography/typography.component';
import { PixelRatio, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex-direction: column;
  flex-grow: 1;
  line-height: 5px;
`;

export const Title = styled(Typography)`
  padding-bottom: ${PixelRatio.roundToNearestPixel(12)}px;
`;

export const Detail = styled(Typography)`
  padding-bottom: ${PixelRatio.roundToNearestPixel(3)}px;
`;
