import TickersList from '../../components/TickersList';
import Title from '../../components/Title';
import './TickersPage.css';


const TickersPage = () => {
  return (
    <section className="tickers-page">
      <div className="container">
       <Title>Tickers price</Title>
       <TickersList />
      </div>
    </section>
  );
}

export default TickersPage;