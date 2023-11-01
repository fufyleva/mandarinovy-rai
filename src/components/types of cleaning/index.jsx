import GeneralCleaning from './GeneralCleaning';
import RegularCleaning from './RegularCleaning';
import styles from './style.module.css';

const TypesOfCleaning = () => {
  return (
    <div className={styles.orange}>
      <div className={styles.row}>
        <GeneralCleaning />
        <RegularCleaning />
      </div>
    </div>
  );
};
export default TypesOfCleaning;
