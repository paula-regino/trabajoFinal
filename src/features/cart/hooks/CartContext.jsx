import React, {
  createContext,
  useContext,
  useReducer,
  useRef,
  useEffect,
} from 'react';
import { useNotification } from './useNotification';

const Cart_Actions = {
  Add_Item: 'Add_Item',
  Remove_Item: 'Remove_Item',
  Clear_Cart: 'Clear_Cart',
  Update_Quantity: 'Update_Quantity',
  Toggle_Cart: 'Toggle_Cart',
};

const initialState = {
  items: [],
  isOpen: false,
  total: 0,
  totalItems: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case Cart_Actions.Add_Item: {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      let newItems;
      if (existingItem) {
        newItems = state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        items: newItems,
        total: parseFloat(total.toFixed(2)),
        totalItems: totalItems,
      };
    }

    case Cart_Actions.Remove_Item: {
      const newItems = state.items.filter((item) => item.id !== action.payload);
      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        items: newItems,
        total: parseFloat(total.toFixed(2)),
        totalItems: totalItems,
      };
    }
    case Cart_Actions.Update_Quantity: {
      const { id, quantity } = action.payload;

      if (quantity <= 0) {
        return cartReducer(state, {
          type: Cart_Actions.Remove_Item,
          payload: id,
        });
      }

      const newItems = state.items.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );

      const total = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        items: newItems,
        total: parseFloat(total.toFixed(2)),
        totalItems: totalItems,
      };
    }

    case Cart_Actions.Clear_Cart:
      return {
        ...state,
        items: [],
        total: 0,
        totalItems: 0,
      };

    case Cart_Actions.Toggle_Cart:
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    default:
      return state;
  }
}

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const cartRef = useRef(null);
  const timeoutRef = useRef(null);
  const { showNotification } = useNotification();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        dispatch({ type: Cart_Actions.Toggle_Cart });
      }
    };

    if (state.isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state.isOpen]);

  const addToCart = (product) => {
    dispatch({ type: Cart_Actions.Add_Item, payload: product });

    showNotification(`${product.title} agregado al carrito`, 'success', 2000);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!state.isOpen) {
      dispatch({ type: Cart_Actions.Toggle_Cart });
      timeoutRef.current = setTimeout(() => {
        dispatch({ type: Cart_Actions.Toggle_Cart });
      }, 2000);
    }
  };

  const removeFromCart = (productId) => {
    dispatch({ type: Cart_Actions.Remove_Item, payload: productId });
  };

  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: Cart_Actions.Update_Quantity,
      payload: { id: productId, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: Cart_Actions.Clear_Cart });
    showNotification('Carrito vaciado', 'info', 1500);
  };

  const toggleCart = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    dispatch({ type: Cart_Actions.Toggle_Cart });
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    cartRef,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
