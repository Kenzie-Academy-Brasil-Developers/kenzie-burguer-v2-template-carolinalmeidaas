import { useContext } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';

const CartProductList = () => {
  const { addProduct, removeAllItem } = useContext(CartContext);

  const renderTotal = () => {
    const total = addProduct.reduce(
      (valorAnterior, valorAtual) => valorAnterior + valorAtual.price,
      0
    );

    return total.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  };

  return (
    <StyledCartProductList>
      <ul>
        {addProduct.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{renderTotal()}</StyledParagraph>
      </div>
      <StyledButton
        $buttonSize='default'
        $buttonStyle='gray'
        onClick={() => {
          removeAllItem();
        }}
      >
        Remover Todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
