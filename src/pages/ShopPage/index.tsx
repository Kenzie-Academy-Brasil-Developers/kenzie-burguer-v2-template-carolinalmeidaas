import { StyledShopPage } from './style';
import CartModal from '../../components/CartModal';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { StyledContainer } from '../../styles/grid';
import { useContext } from 'react';
import { UserContext } from '../../providers/UserContext';

const ShopPage = () => {
  const { modal, renderProducts } = useContext(UserContext);
  renderProducts();

  return (
    <StyledShopPage>
      {modal ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
};

export default ShopPage;
