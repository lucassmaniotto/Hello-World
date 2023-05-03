import MainButton from 'components/MainButton';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card({ project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className={styles.card}>
          <img
              className={styles.cover}
              src={`/assets/image/projects/${project.id}/cover.png`}
              alt={project.title}
          />
          <h2 className={styles.title}>{project.title}</h2>
          <MainButton>Ver projeto</MainButton>
      </div>
    </Link>
  )
}