import { createContext, useState } from 'react';
import { ICartContextProvider, IDefaultProvideProps, IProducts } from './type';
import { api } from '../../services/api';

export const CartContext = createContext({} as ICartContextProvider);

export const CartProvider = ({ children }: IDefaultProvideProps) => {
  const [modal, setModal] = useState(false);

  const [products, setProducts] = useState<IProducts[]>([]);

  const [allProducts, setAllProducts] = useState<IProducts[]>([]);

  const [addProduct, setAddProduct] = useState<IProducts[]>([]);

  const renderProducts = async () => {
    const token = localStorage.getItem('@TOKEN');
    if (token) {
      try {
        const response = await api.get<IProducts[]>('/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data);
        setAllProducts(response.data)
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addToCart = (product: IProducts) => {
    setAddProduct([...addProduct, product]);
  };

  const removeItem = (item: IProducts) => {
    const newListProducts = addProduct.filter((prod) => prod.id !== item.id);
    setAddProduct(newListProducts);
  };

  const removeAllItem = () => {
    setAddProduct([]);
  };

  return (
    <CartContext.Provider
      value={{
        renderProducts,
        modal,
        setModal,
        products,
        setProducts,
        addProduct,
        setAddProduct,
        addToCart,
        removeItem,
        removeAllItem,
        allProducts,
        setAllProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
