import styled from 'styled-components';

export const TickersItemStyle = styled.li`
  display: grid;
  grid-template-columns: repeat(7, 1fr) 2fr;
  place-items: center;
  padding: 10px;
  text-align: center;
  :not(:first-of-type) {
    border-top: 1px solid #dadce0;
  }
  @media(max-width: 800px) {
    .ticker-name {
      grid-area: name;
    }
    .ticker-exchange {
      grid-area: exchange;
    }
    .ticker-price {
      grid-area: price;
    }
    .ticker-change {
      grid-area: change;
    }
    .ticker-change-percent {
      grid-area: change-percent;
    }
    .ticker-yield {
      display: none;
    }
    .ticker-dividend {
      display: none;
    }
    .ticker-time{
      display: none;
    }
    grid-template-columns: repeat(4,1fr);
    grid-gap: 8px;
    grid-template-areas: 
    "name     price change change-percent time"
    "exchange price change change-percent time"
    
  }
  
  @media(max-width: 576px) {
    grid-template-columns: 2fr 1fr;
    justify-items: start;
    font-size: 14px;
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