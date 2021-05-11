import {reducer} from './reducer';

describe('Reducer testing', () => {
  test("Launch reducer", () => {
    const state = reducer();
    expect(state).toEqual({tickers: []});
  });

  test("Load tickers", () => {
    const tickersData = {
      "ticker":"AAPL",
      "exchange":"NASDAQ",
      "price":"233.86",
      "change":"102.35",
      "change_percent":"0.61",
      "dividend":"0.47",
      "yield":"1.01",
      "last_trade_time":"2021-05-11T15:02:19.000Z"
    };
    const action = {type: "LOAD_TICKERS", payload: [tickersData]};
    const state = reducer({tickers: []}, action);
    expect(state.tickers).toEqual(action.payload);
  });
});