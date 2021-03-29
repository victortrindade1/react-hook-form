import styled from 'styled-components/native';
import Input from '../../components/Input';

export const Container = styled.View`
  background: #fff;
  /* width: 100%; */

  border-radius: 4px;
  border-color: #123456;
  border-style: solid;
  border-width: 1px;
  margin: 30px;
`;

export const LoginInput = styled(Input).attrs({
  placeholderTextColor: '#999',
})`
  font-family: 'Roboto-Regular';
  height: 45px;
  margin-left: 20px;
  font-size: 16px;
`;
