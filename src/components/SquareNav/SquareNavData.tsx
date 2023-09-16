import styles from "./SquareNav.module.scss";

export interface SquareNavDataProps {
  title: string;
  href: string;
  active?: boolean;
}

export default function SquareNavData(props: { titles: SquareNavDataProps[] }) {
  return (
    <nav className={styles.navData}>
      <ul className={styles.ul}>
        {props.titles.map((item, index) => (
          <li
            key={index}
            className={`${styles.li} ${item.active ? styles.active : ""}`}
          >
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
