import { Provider } from 'react-redux';
import store from './Components/store/store';
import './App.css';
import Counter from './Components/Counter';
import Cart from './Components/Cart';


function App() {

  return (
    <Provider store={store}>
      <Counter />
      <Cart />
    </Provider>
    
  );
}

export default App;
