import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {metrics} from '../../../utils'
export const Wrapper = styled.View`
  width: 100%;
  align-items:center;
  justify-content:center;
  flex-direction:row;
  margin-top:${metrics.hp(20)}px;
`;

export const Title = styled.Text`
  color: #000;
`;



export const LeftArrow = styled(Ionicons).attrs((props) => ({
name:'arrow-back',
size:20,
color: props.disabled ? props.theme.colors.primary_light : props.theme.colors.primary
}))`

`

export const RightArrow = styled(Ionicons).attrs((props) => ({
name:'arrow-forward',
size:20,
color: props.disabled ? props.theme.colors.primary_light : props.theme.colors.primary
}))``

export const PagerWrapper = styled.View`
flex-direction:row;
align-items:center;

`

export const PagerMarker = styled.View`
width:${props => props.status ==='active' ? '20px' : '16px'};
height:${props => props.status ==='active' ? '20px' : '16px'};
border-radius:${props => props.status ==='active' ? '10px' : '8px'};
background:${props => props.status === 'next' ? props.theme.colors.primary_light :props.theme.colors.primary};
margin:0 5px;
` 