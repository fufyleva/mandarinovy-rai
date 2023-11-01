import styles from './style.module.css';

const RegularCleaning = () => {
  return (
    <div>
      <header className={styles.white}>
        <h1 className={styles.title}>Поддерживающая уборка</h1>
      </header>

      <main>
        <div className={styles.white}>
          <h2 className={styles.title}>Что входит:</h2>
        </div>
        <ul>
          <li>
            <h3>Мытье полов, отодвигая мебель</h3>
          </li>
          <li>
            <h3>Протирание пыли</h3>
          </li>
          <li>
            <h3>мытье стен</h3>
          </li>
          <li>
            <h3>Мытье окон с 2-х сторон</h3>
          </li>
        </ul>
      </main>

      <div className={styles.white}>
        <h2 className={styles.title}>Стоимость: 50 руб/кв метр</h2>
      </div>
    </div>
  );
};
export default RegularCleaning;
