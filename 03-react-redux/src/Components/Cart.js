import { useSelector,useDispatch } from "react-redux";
import { addToCart, removeFromCart, incrementQuantityInCart, removeCartById  } from "./slice/CartSlice";

const Cart = ()=>{

    // const count = useSelector((state) => state.counter.count)
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(addToCart({name:'Bag',quantity:2,itemId:1}))}>Add to cart</button>
            {/* <h2>{items.name}</h2> won't work as items is list
            we have to use loop to print the data */}
            
            <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
                <button onClick={() => dispatch(incrementQuantityInCart({ itemId: item.id, amount: 1 }))}>+</button>
                <button onClick={() => dispatch(removeFromCart())}>-</button>
                <button onClick={() => dispatch(removeCartById({ itemId: item.id }))}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
    )

}

export default Cart;