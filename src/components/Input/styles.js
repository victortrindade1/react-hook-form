import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 25px;
  height: 45px;
  background: #fff;
  border-color: #ddd;
  border-width: 1px;
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  color: #999;
  font-size: 16px;
`;
