import styled from 'styled-components';
import { color, layout, space, flexbox, grid } from 'styled-system';

export const Box = styled.div`
  ${color}
  ${layout}
  ${space}
`;

export const Flex = styled.ul`
  display: flex;
  ${grid}
  ${flexbox}
  ${layout}
  ${space}
`;
