import styles from "./Copyright.module.scss";

interface CopyrightProps {
  text: string;
  img?: string[];
  alt?: string[];
  href?: string[];
}

export default function Copyright({ ...props }: CopyrightProps) {
  return (
    <div className={styles.copyright}>
      <div className={styles.text}>{props.text}</div>

      {props.img && (
        <div className={styles.icon}>
          {props.img?.map((item, index) => {
            return (
              <a href={props.href?.[index]} key={index}>
                <img src={item} alt={`${props.alt?.[index]} icon`} />
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
