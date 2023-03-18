import styles from "./navbar.module.css";
import logo from './src/img/logo.png';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
  return (
    <nav className={styles.container}>
        <img className={styles.logo} src={logo} alt="Logo"/>
        <p>Inicio</p>
        <p>Nuevo!</p>
        <p>Colección</p>
        <p>Contactanos</p>
        <CartWidget/>
    </nav>
  );
};

export default Navbar;
