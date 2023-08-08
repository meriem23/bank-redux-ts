import { useDispatch, useSelector } from "react-redux";
import { Dispatch, bindActionCreators } from "redux";
import { actionCreators, State } from "./state";
import "./App.css";

function App() {
  const dispatch: Dispatch = useDispatch();
  const { bankrupt, depositMoney, withdrawMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const amount = useSelector((state: State) => state.bank);
  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(100)}>Deposit</button>
      <button onClick={() => withdrawMoney(10)}>Withdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
