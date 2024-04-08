import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductType } from "../services/products";

type CartContextType = {
  cart: ProductType[];
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);
export const CartContextProvider = (props: { children?: ReactNode }) => {
  const [cart, setCart] = useState<ProductType[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("shopping-cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addProduct = (product: ProductType) => {
    const updatedCart = [...cart, product];
    localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const removeProduct = (productId: number) => {
    const productIndex = cart.findIndex((product) => product.id === productId);

    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      localStorage.setItem("shopping-cart", JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
