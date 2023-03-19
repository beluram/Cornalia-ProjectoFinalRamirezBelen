import styles from "./navbar.module.css";
import logo from './src/img/logo.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className={styles.container}>
      <Link to="/home">
      <img className={styles.logo} src={logo} alt="Logo"/>
      </Link>
      <Link to="/home">
        <p>Inicio</p>
      </Link>
      <Link to="/products">
        <p>Nuestros Productos</p>
      </Link>
      <Link to= "/cart">
        <CartWidget/>
      </Link>
      
    </nav>
  );
};

export default Navbar;
