import styled from 'styled-components';
import { colors } from '../../utils/colors';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 40px;
  padding: 0 10px;
  border-style: solid;
  border-width: 1px;
  margin: 5px 0 5px 0;
  :focus {
    outline: 0;
  }
  color: ${colors.black};
`;

export const InputDisabled = styled(Input)`
  background: transparent;
  height: 34px;
  border-style: solid;
  border-color: ${colors.white};
  color: ${colors.white};
`;
