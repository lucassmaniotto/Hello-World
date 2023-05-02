import styles from './Badge.module.css';

export default function Badge({ name, icon }) {
  return (
    <div className={styles.technology}>
      <img
        src={icon}
        alt={name}
        className={styles.technologyIcon}
      />
      <p className={styles.technologyName}>{name}</p>
    </div>
  )
}
