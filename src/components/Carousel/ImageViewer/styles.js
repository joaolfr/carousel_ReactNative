import styled from 'styled-components';
import {metrics} from '../../../utils'

export const Wrapper = styled.View`
  width: 100%;
  flex-direction:row;
  justify-content:space-evenly;
  align-items:center;
`;

export const Title = styled.Text`
  color: #000;
`;

export const Image = styled.Image`
  height: ${metrics.hp(150)}px;
  width: ${metrics.hp(100)}px;
`;
