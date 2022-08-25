import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  padding: ${p => p.theme.space[1]}px;
  text-alight: centr;
  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  margin-left: ${p => p.theme.space[3]}px;
  cursor: pointer;
  background-color: ${p => p.theme.colors.accent};
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ItenInfoText = styled.p`
  margin: ${p => p.theme.space[2]}px 0;
  padding: ${p => p.theme.space[1]}px;
  margin-right: ${p => p.theme.space[2]}px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontWeights.s};
`;
