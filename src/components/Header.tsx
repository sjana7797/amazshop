import { Link } from "react-router-dom";

//Material UI Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import { useStateValue } from "../context/StateProvider";

function Header() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [{ cart }, dispatch] = useStateValue();
  return (
    <header className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <StoreIcon fontSize="large" className="header__logo_icon" />
          <h2 className="header__logo_title">AmazShop</h2>
        </div>
      </Link>
      <div className="header__search">
        <input type="text" className="header__search_bar" />
        <SearchIcon className="header__search_icon" />
      </div>
      <div className="header__nav">
        <div className="header__nav__item">
          <span className="header__nav__item_line_one">Hello Guest</span>
          <span className="header__nav__item_line_two">Sign in</span>
        </div>
        <div className="header__nav__item">
          <span className="header__nav__item_line_one">Your</span>
          <span className="header__nav__item_line_two">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__nav__item_basket">
            <ShoppingCartIcon />
            <span className="header__nav__item_line_two header__nav__item_basket_count">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
