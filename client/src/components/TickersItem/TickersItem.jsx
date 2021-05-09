import {TickersItemStyle, TickerChange, TickerChangePercent} from './TickersItem.styles.js';
import ArrowDown from './Icons/ArrowDown';
import ArrowUp from './Icons/ArrowUp';

const TickersItem = ({data}) => {
  const {ticker, exchange, price, change, change_percent, dividend, localDate} = data;
  const isPossitiveChange = change > 0 ? true : false;
  const arrow = isPossitiveChange ? <ArrowUp/> : <ArrowDown/>;

  return (
    <TickersItemStyle>
      <div>{ticker}</div>
      <div>{exchange}</div>
      <div>{price}$</div>
      <TickerChange positive={isPossitiveChange}>
        {isPossitiveChange ? `+${change}` : `-${change}`}$
      </TickerChange>
      <TickerChangePercent positive={isPossitiveChange}>
        {arrow}{change_percent}%
      </TickerChangePercent>
      <div>{data.yield}</div>
      <div>{dividend}</div>
      <div>{localDate}</div>
    </TickersItemStyle>
  );
}

export default TickersItem;
