// @packages
import styled from 'styled-components';

export const HomePageWrapper = styled.div`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => !props.repos ? '100vh' : 'auto'};
`;
