import styles from "./SquareNav.module.scss";

export interface SquareNavDataProps {
  title: string;
  aHref: string;
  className?: string;
}

export function SquareNavData({ title, aHref, className }: SquareNavDataProps) {
  return (
    <li className={`${styles.li} ${className}`}>
      <a href={aHref}>{title}</a>
    </li>
  );
}

export default function SquareNav() {
  return (
    <nav className={styles.squareNav}>
      <ul className={styles.ul}>
        <SquareNavData
          title="Celular"
          aHref="#/celular"
          className={styles.active}
        />
        <SquareNavData title="Acessórios" aHref="#/acessorios" />
        <SquareNavData title="Tablets" aHref="#/tablets" />
        <SquareNavData title="Notebooks" aHref="#/notebooks" />
        <SquareNavData title="Tvs" aHref="#/tvs" />
        <SquareNavData title="Ver todos" aHref="#/ver-todos" />
      </ul>
    </nav>
  );
}
