import vtex from "../../assets/svg/vtex.svg";
import Title from "../Title/Title";
import CarouselBrand from "./CarouselBrand";
import styles from "./Brand.module.scss";

export default function Brand() {
  const brand = [];
  for (let i = 0; i < 10; i++) {
    brand.push(
      <div key={i} className={styles.brand}>
        <div className={styles.container}>
          <img src={vtex} alt="Vtex" />
        </div>
      </div>,
    );
  }

  return (
    <section>
      <Title title="Navegue por marcas" />
      <CarouselBrand>{brand}</CarouselBrand>
    </section>
  );
}
