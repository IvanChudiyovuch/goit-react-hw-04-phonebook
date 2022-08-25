import styled from '@emotion/styled';

export const Lable = styled.label`
  padding: 0;
  padding: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.monospace};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[1]}px;
  height: 20px;
  border: 1px solid ${p => p.theme.colors.black};
`;

export const Forma = styled.form`
  margin: ${p => p.theme.space[4]}px 0;
  padding: ${p => p.theme.space[3]}px;
  border: 1px solid ${p => p.theme.colors.black};
  width: 300px;
`;
