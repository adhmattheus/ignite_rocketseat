import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img
        className={styles.cover} src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60avatar" alt=""
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/adhmattheus.png" />

        <strong>Mattheus Adhonnay</strong>
        <span>Web Developer</span>

      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}