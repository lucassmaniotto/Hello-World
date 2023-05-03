import Card from 'components/Card/CardProjects';
import styles from './Home.module.css';

import projects from 'json/projects.json';


export default function Home() {
  return (
    <ul className={styles.projects}>
      {projects.map((project) => (
        <li key={project.id}>
          <Card project={project} />
        </li>
      ))}
    </ul>
  )
}
