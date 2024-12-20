import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/users/Username';

function Header() {
  return (
    <header
      className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4
        py-3 uppercase sm:px-6 sm:py-5"
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      {/* Search Order */}
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
