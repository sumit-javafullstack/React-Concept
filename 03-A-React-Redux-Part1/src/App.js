
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addProduct, removeProductById, getProductById , getProducts } from './redux/slice/ProductSlice'

function App() {

  const products = useSelector((state) => state.productList.products)
  const dispatch = useDispatch()



  return (
    <div >
      <h2>Hi</h2>
      
      <button onClick={()=> dispatch(addProduct({id: 2, title: 'Sachin',category: 'Tester'}))}>add product</button>
      <button onClick={()=> dispatch(removeProductById({id: 2}))}>RemoveProductById2</button>

      { products.map( product => (
          <div>
          <p> {product.id}</p>
          <p> {product.title}</p>
          <p> {product.category}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
