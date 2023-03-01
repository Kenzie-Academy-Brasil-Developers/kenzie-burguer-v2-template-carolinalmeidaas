import { MdSearch } from 'react-icons/md';
import { FiDelete } from 'react-icons/fi';
import { useContext, useEffect, useState } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../providers/CartContext';
import { IProducts } from '../../../providers/CartContext/type';

const SearchForm = () => {
  const { products, setProducts, allProducts, setAllProducts} = useContext(CartContext);

  const [prod, setProd] = useState<IProducts[]>([]);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState('');

  const searchProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    setProd(searchProducts);
    setAllProducts(searchProducts)
  }, [search]);

  const filter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearch(filteredProducts);
  };

  return (
    <StyledSearchForm onSubmit={(event) => filter(event)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        value={filteredProducts}
        onChange={(e) => setFilteredProducts(e.target.value)}
      />
      {search === '' ? (
        <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
          <MdSearch />
        </StyledButton>
      ) : (
        <StyledButton
          $buttonSize='medium'
          $buttonStyle='green'
          onClick={() => setFilteredProducts('')}
        >
          <FiDelete/>
        </StyledButton>
      )}
    </StyledSearchForm>
  );
};

export default SearchForm;
