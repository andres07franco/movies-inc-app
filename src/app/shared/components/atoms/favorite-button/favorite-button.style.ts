import styled from 'styled-components/native';

export const StyledActivityIndicator = styled.ActivityIndicator``;
styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.neutral100,
}));
