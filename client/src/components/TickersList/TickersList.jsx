import {useEffect} from 'react';
import TickersItem from '../TickersItem';
import TickersService from '../../services/tickers-service';
import {TickersListStyle} from './TickersList.styles';
import { useSelector, useDispatch } from 'react-redux';

const service = new TickersService();

const TickersList = () => {
  const tickers = useSelector(state => state.tickers);
  const dispatch = useDispatch();

  useEffect(() => {
    service.onData((dataTickers) => {
      dispatch({type: "LOAD_TICKERS", payload: dataTickers});
    });
  }, []);

  const tickersList = tickers.map(item => 
    <TickersItem key={item.ticker} data={item}/>);
  
  return (
    <TickersListStyle>
      {tickersList}
    </TickersListStyle>
  );
}

export default TickersList;