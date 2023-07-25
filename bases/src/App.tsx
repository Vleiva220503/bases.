
import { Counter } from './bases/Counter';
import { CounteBy } from './bases/CounterBy';
import { CounterEffec } from './bases/Counter Efecct';
import { CounterHook } from './bases/Counter Hook';
import { CounterReducer } from './counter-reducer/CounterReducer';
//import { CounterReducer } from './bases/CounterReducer';
function App() {
  return (
    <>
    <Counter initalValue={10}/>
    <CounteBy/>
    <CounterEffec/>
    <CounterHook/>
    <CounterReducer/>
    </>
  );
}

export default App;
