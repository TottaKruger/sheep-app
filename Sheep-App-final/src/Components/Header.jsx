import CartIcon from "./CartIcon";
import style from "./Header.module.scss";
import { Link } from "react-router-dom";
function Header() {
    return ( 
        <header className={style.header}>
            <Link to="/"><h1>SHEEP SHOP</h1></Link>
            <CartIcon />
        </header>
     );
}

export default Header;