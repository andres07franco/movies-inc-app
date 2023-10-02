import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Block } from '../../atoms';
import { StyledCard } from './loading-block.style';

interface Props {
  loading: boolean;
  overlap?: boolean;
  children: JSX.Element | JSX.Element[];
}
export const LoadingBlock: React.FC<Props> = ({
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

LoadingBlock.defaultProps = {
  overlap: false,
};

export default LoadingBlock;
