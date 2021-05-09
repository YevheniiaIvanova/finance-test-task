import styled from 'styled-components';

export const TickersItemStyle = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 1fr) 2fr;
  align-items: center;
  padding: 10px;
  text-align: center;
  :not(:first-of-type) {
    border-top: 1px solid #dadce0;
  }
`;
export const TickerChange = styled.div`
  color: ${props => props.positive ? "#217b3f" : "#d86562"};
`;

export const TickerChangePercent = styled(TickerChange)`
  padding: 10px;
  border-radius: 8px;
  background-color: ${props => props.positive ? "#e6f4ea" : "#fce8e6"};
`;