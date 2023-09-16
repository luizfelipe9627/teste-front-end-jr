import styles from "./CategoriasData.module.scss";

interface CategoriasDataProps {
  title?: string;
  img: string;
  active?: boolean;
}

export default function CategoriasData(props: CategoriasDataProps) {
  return (
      <li
        className={`${styles.categoriasData} ${
          props.active ? styles.active : ""
        }`}
      >
        {props.img && (
          <button className={styles.container}>
            <img src={props.img} alt={props.title} />
          </button>
        )}

        {props.title && <h2>{props.title}</h2>}
      </li>
  );
}
