import { Button } from "../Button/Button";
import styles from "./BannerData.module.scss";

interface BannerDataProps {
  img: string;
  title?: string;
  description?: string;
  textButton?: string;
}

export function BannerData({ ...props }: BannerDataProps) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${props.img})` }}
    >
      {props.title || props.description || props.textButton ? (
        <div className={styles.text}>
          {props.title && <h1>{props.title}</h1>}
          {props.description && <p>{props.description}</p>}
          {props.textButton && (
            <Button>{props.textButton}</Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
