import styled from 'styled-components';

export const styleButton = styled.button`
  text-transform: uppercase;
  display: flex;
  cursor: pointer;
  padding: 0;
  border: none;
  background-color: transparent;
`;

export const SimpleButton = styled(styleButton)`
  padding: 15px 30px;
  font-size: 24px;
  line-height: 28px;
`;
