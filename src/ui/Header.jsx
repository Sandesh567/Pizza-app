import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header
      className="px-4 py-3 bg-red-600 uppercase
    border-b border-stone-200 sm:px-6 flex items-center justify-between
    "
    >
      <Link to="/" className="tracking-widest text-slate-50">
        Pizza Farm Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
