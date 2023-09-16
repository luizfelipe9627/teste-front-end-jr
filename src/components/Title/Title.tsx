import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  titleLink?: string;
  href?: string;
  lines?: boolean;
}

export default function Title(props: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        {props.lines && <span></span>}
        <h1>{props.title}</h1>
        {props.lines && <span></span>}
      </div>

      {props.titleLink && (
        <div className={styles.link}>
          <a href={props.href}>{props.titleLink}</a>
        </div>
      )}
    </div>
  );
}
