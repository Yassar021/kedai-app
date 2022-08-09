import { useReducer, useContext, createContext } from 'react'
import Cookies from 'js-cookie';

const CartStateContext = createContext()
const CartDispatchContext = createContext()

export const CART_TYPE = {
  SET : 'SET',
  REMOVE : 'REMOVE',
}

const reducer = (state, action) => {
  switch (action.type) {
    case CART_TYPE.SET:
      Cookies.set('cart', JSON.stringify([
        ...state,
        action.payload
      ]));
      return [
        ...state,
        action.payload
      ];
    case CART_TYPE.REMOVE:
      Cookies.remove('cart');
      return [];
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const data = Cookies.get('cart');
  const [state, dispatch] = useReducer(reducer, data ? JSON.parse(data) : []);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export const useCart = () => useContext(CartStateContext)
export const useDispatchCart = () => useContext(CartDispatchContext)