import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
  titleLink?: string;
  aHref?: string;
  lines?: boolean;
}

export default function Title({ title, titleLink, aHref, lines }: TitleProps) {
  return (
    <div className={styles.title}>
      <div className={styles.text}>
        {lines && <span></span>}
        <h1>{title}</h1>
        {lines && <span></span>}
      </div>

      {titleLink && (
        <div className={styles.link}>
          <a href={aHref}>{titleLink}</a>
        </div>
      )}
    </div>
  );
}
