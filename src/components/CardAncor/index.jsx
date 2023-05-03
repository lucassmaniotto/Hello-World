import styles from './CardAncor.module.css';

export default function CardAncor({ title, paragraph, date, link, icon }) {
  return (
    <a 
      href={link}
      className={styles.certificateItem}
    >
      <img
        src={icon}
        alt={title}
        className={styles.certificateItemIcon}
      />
      <h4 className={styles.certificateItemTitle}>{title}</h4>
      <p className={styles.certificateItemParagraph}>{paragraph}</p>
      <p className={styles.certificateItemParagraph}>{date}</p>
    </a>
  )
}