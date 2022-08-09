import { useReducer, useContext, createContext } from 'react'
import Cookies from 'js-cookie';

const QRStateContext = createContext()
const QRDispatchContext = createContext()

export const QR_TYPE = {
  SET : 'SET',
  REMOVE : 'REMOVE',
}

const reducer = (_, action) => {
  switch (action.type) {
    case QR_TYPE.SET:
      return Cookies.set('QR', action.payload);
    case QR_TYPE.REMOVE:
      return Cookies.remove('QR');
    default:
      return Cookies.get('QR');
  }
}

export const QRProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Cookies.get('QR'))
  return (
    <QRDispatchContext.Provider value={dispatch}>
      <QRStateContext.Provider value={state}>
        {children}
      </QRStateContext.Provider>
    </QRDispatchContext.Provider>
  )
}

export const useQR = () => useContext(QRStateContext)
export const useDispatchQR = () => useContext(QRDispatchContext)