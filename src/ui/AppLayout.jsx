import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';

  return (
    <div className="layout">
      {/* Loader */}
      {isLoading && <Loader />}

      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      {/* CartOverview */}
      <CartOverview />
    </div>
  );
}

export default AppLayout;
