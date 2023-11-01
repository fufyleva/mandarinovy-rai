import { Link } from 'react-router-dom';
import styles from './style.module.css';

const NavBar = () => {
  return (
    <div className={styles.orange}>
      <div className={styles.row}>
        <Link to='/about-us'>
          <h1>О нас</h1>
        </Link>
        <Link to='/'>
          <h1>Виды уборок</h1>
        </Link>
        <Link to='/api'>
          <h1>Api</h1>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
