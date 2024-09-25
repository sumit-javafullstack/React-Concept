
import './App.css';
import FetchData from './Components/useEffects/FetchData';
import UseEffectBasic from './Components/useEffects/UseEffectBasic';
import CreateContext from './Components/useContext/CreateContext';

import ReducerHooks from './Components/useReducer/ReducerHooks';
function App() {
  return (
    
    <div>
      <h1>
        <CreateContext.Provider value={{items:[]}}>
          <UseEffectBasic />
          <ReducerHooks />
          <FetchData />
        </CreateContext.Provider>
      </h1>
    </div>
  );
}

export default App;
