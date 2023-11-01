import { Link } from 'react-router-dom';
import styles from './style.module.css';

const TopInformation = () => {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
        <h1>Часы работы</h1>
        <h2>С 09:00 до 22:00</h2>
      </div>

      <div className={styles.column}>
        <h1>Телефон </h1>
        <h2>+7 000 00 00</h2>
      </div>

      <div className={styles.column}>
        <h1>Где работаем</h1>
        <h2>г.Зачарованный лес</h2>
      </div>
      <Link to='registration'>
        <h2>Зарегестрироваться</h2>
      </Link>
    </div>
  );
};
export default TopInformation;
