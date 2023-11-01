import styles from './style.module.css';

const Registration = () => {
  return (
    <div className={styles.contaner}>
      <h1 className={styles.header}>Регистрация</h1>
      <div>
        <div>
          <h3>Имя пользователя:</h3>
          <input type='text' placeholder='Введите имя'></input>
        </div>
        <div>
          <h3>Пароль:</h3>
          <input type='password' placeholder='Введите пароль'></input>
        </div>
        <p></p>
      </div>
      <button className={styles.button}> Зарегестрироваться</button>
    </div>
  );
};

export default Registration;
