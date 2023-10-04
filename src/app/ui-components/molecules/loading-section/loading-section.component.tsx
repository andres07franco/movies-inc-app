import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Block } from '../../atoms';
import { StyledCard } from './loading-section.style';

interface Props {
  loading: boolean;
  overlap?: boolean;
  children: JSX.Element | JSX.Element[] | boolean;
}
export const LoadingSection: React.FC<Props> = ({
  overlap,
  loading,
  children,
}) => {
  const style = {
    marginTop: overlap ? -80 : -30,
  };
  return (
    <Block>
      <StyledCard style={{ ...style }}>
        {loading && <ActivityIndicator />}
        {!loading && children}
      </StyledCard>
    </Block>
  );
};

LoadingSection.defaultProps = {
  overlap: false,
};

export default LoadingSection;
