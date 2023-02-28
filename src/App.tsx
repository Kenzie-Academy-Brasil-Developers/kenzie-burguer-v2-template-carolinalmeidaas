import { UserProvider } from './providers/UserContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <UserProvider>
    <GlobalStyles />
    <Router />
  </UserProvider>
);

export default App;
