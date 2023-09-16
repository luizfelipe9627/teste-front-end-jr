import Button from "../Button/Button";
import banner from "../../assets/img/banner.png";
import styles from "./Banner.module.scss";

interface BannerDataProps {
  img: string;
  title?: string;
  description?: string;
  textButton?: string;
}

const BannerData = ({ img, title, description, textButton }: BannerDataProps) => {
  return img ? (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${img})` }}
    >
      {title || description || textButton ? (
        <div className={styles.text}>
          {title && <h1>{title}</h1>}
          {description && <p>{description}</p>}
          {textButton && <Button>{textButton}</Button>}
        </div>
      ) : null}
    </div>
  ) : null;
};

export default function Banner() {
  return (
    <section>
      <BannerData
      title="Venha conhecer nossas promoções"
      description="50% Off nos produtos"
      img={banner}
      textButton="Ver produto"
      />
    </section>
  );
}
