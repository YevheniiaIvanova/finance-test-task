export const reducer = (store = {tickers: []}, action={}) => {
  if(action.type === "LOAD_TICKERS") {
    return {...store, tickers: action.payload};
  }
  return store;
}