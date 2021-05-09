import {useState, useEffect} from 'react';
import TickersItem from '../TickersItem';
import TickersService from '../../services/tickers-service';
import {TickersListStyle} from './TickersList.styles';

const service = new TickersService();

const TickersList = () => {
  const [tickers, setTickers] = useState([]);
  
  useEffect(() => {
    service.onData((dataTickers) => {
      setTickers(dataTickers);
    });
  }, []);

  const tickersList = tickers.map(item => 
    <TickersItem key={item.ticker} data={item}/>);
  
  return (
    <TickersListStyle>
      {console.log(tickersList)}
      {tickersList}
    </TickersListStyle>
  );
}

export default TickersList;