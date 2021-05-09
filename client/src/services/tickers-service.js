import io from "socket.io-client";

export default class TickersService {
  constructor() {
    const SERVER_URL = "ws://localhost:4000/";
    this.socket = io.connect(SERVER_URL);
    this.socket.emit('start');
  }

  onData(handler) {
    this.socket.on('ticker', (response) => {
      const result = Array.isArray(response) ? response : [response];
      const preparedData = result.map(item => {
        const date = new Date(item.last_trade_time);
        const localDate = date.toLocaleString('ru-RU');
        return {...item, localDate};
      });
      handler(preparedData);
    });
  }
}

