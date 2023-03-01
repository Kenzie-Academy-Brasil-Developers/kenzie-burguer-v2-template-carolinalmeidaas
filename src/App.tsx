import { CartProvider } from './providers/CartContext';
import { UserProvider } from './providers/UserContext/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <UserProvider>
    <CartProvider>
      <GlobalStyles />
      <Router />
    </CartProvider>
  </UserProvider>
);

export default App;
