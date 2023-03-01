import { useContext, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';
import { StyledContainer } from '../../styles/grid';
import { CartContext } from '../../providers/CartContext';

const ShopPage = () => {
  const { modal, renderProducts } = useContext(CartContext);

  useEffect(() => {
    renderProducts();
  }, []);
  return (
    <>
      <StyledShopPage>
        {modal ? <CartModal /> : null}
        <Header />
        <main>
          <StyledContainer containerWidth={1300}>
            <ProductList />
          </StyledContainer>
        </main>
      </StyledShopPage>

      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  );
};

export default ShopPage;
