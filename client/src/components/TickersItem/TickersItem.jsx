import {TickersItemStyle, TickerChange, TickerChangePercent} from './TickersItem.styles.js';
import ArrowDown from './Icons/ArrowDown';
import ArrowUp from './Icons/ArrowUp';

const TickersItem = ({data}) => {
  const {ticker, exchange, price, change, change_percent, dividend, localDate} = data;
  const isPossitiveChange = change > 0 ? true : false;
  const arrow = isPossitiveChange ? <ArrowUp/> : <ArrowDown/>;

  return (
    <TickersItemStyle>
      <div className="ticker-name">{ticker}</div>
      <div className="ticker-exchange">{exchange}</div>
      <div className="ticker-price">{price}$</div>
      <TickerChange className="ticker-change" positive={isPossitiveChange}>
        {isPossitiveChange ? `+${change}` : `-${change}`}$
      </TickerChange>
      <TickerChangePercent className="ticker-change-percent" positive={isPossitiveChange}>
        {arrow}{change_percent}%
      </TickerChangePercent>
      <div className="ticker-yield">{data.yield}</div>
      <div className="ticker-dividend">{dividend}</div>
      <div className="ticker-time">{localDate}</div>
    </TickersItemStyle>
  );
}

export default TickersItem;
