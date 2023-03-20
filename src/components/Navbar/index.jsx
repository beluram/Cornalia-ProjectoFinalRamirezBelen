import styles from "./navbar.module.css";
import logo from './src/img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/">
      <img className={styles.logo} src={logo} alt="Logo"/>
      </Link>
      <Link to="/">
        <p>Inicio</p>
      </Link>
      <Link to={"/category/mochilas"}>
        <p>Mochilas</p>
      </Link>
      <Link to="/category/carteras">
        <p>Carteras</p>
      </Link>
      <Link to="/category/bijouterie">
        <p>Bijouterie</p>
      </Link>
      <Link to= "/cart">
        <CartWidget/>
      </Link>
      
    </nav>
  );
};

export default Navbar;