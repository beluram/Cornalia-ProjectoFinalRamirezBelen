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
      <Link to="/mochilas">
        <p>Mochilas</p>
      </Link>
      <Link to="/carteras">
        <p>Carteras</p>
      </Link>
      <Link to="/bijou">
        <p>Bijou</p>
      </Link>
      <Link to= "/cart">
        <CartWidget/>
      </Link>
      
    </nav>
  );
};

export default Navbar;
