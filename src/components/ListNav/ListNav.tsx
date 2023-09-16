import styles from "./ListNav.module.scss";

interface ListNavProps {
  title?: string;
  liText?: Array<string>;
  liHref?: Array<string>;
  img?: Array<string>;
  imgHref?: Array<string>;
  className?: string;
}

export default function ListNav({ ...props }: ListNavProps) {
  return (
    <div className={styles.listNav}>
      {props.title && <h1>{props.title}</h1>}

      {props.liText && (
        <nav>
          <ul>
            {props.liText.map((item, index) => (
              <li key={index}>
                <a href={props.liHref?.[index]}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {props.img && (
        <div className={`${styles.img} ${props.className}`}>
          {props.img.map((item, index) => (
            <a href={props.imgHref?.[index]} key={index}>
              <img src={item} alt={`${props.title} icon`} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
