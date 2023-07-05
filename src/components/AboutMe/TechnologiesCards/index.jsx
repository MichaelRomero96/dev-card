import styles from './styles.module.css';
import data from '../../../db/aboutMe';

const TechnologiesCards = () => {
  const { technologies } = data;
  return (
    <div className={styles.items}>
      {technologies?.map(({ name, description, icon }) => (
        <div key={name} className={styles.card}>
          <figure className={styles.item__icon}>
            <img src={icon} alt="tech" />
          </figure>
          <h3 className={styles.item__title}>{name}</h3>
          <p className={styles.item__desc}>{description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesCards;
