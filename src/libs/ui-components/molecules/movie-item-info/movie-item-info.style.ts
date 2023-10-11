import Typography from '@ui-components/atoms/typography/typography.component';
import { Dimensions, PixelRatio, View } from 'react-native';
import styled from 'styled-components';
const SIDE_WIDTH = 230;
export const Container = styled(View)`
  flex-direction: column;
  line-height: 5px;
`;

export const Title = styled(Typography)`
  max-width: ${Dimensions.get('screen').width - SIDE_WIDTH}px;
  padding-bottom: ${PixelRatio.roundToNearestPixel(12)}px;
`;

export const Detail = styled(Typography)`
  padding-bottom: ${PixelRatio.roundToNearestPixel(3)}px;
`;
