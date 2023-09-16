import Title from "../Title/Title";
import CarouselMarcas from "./CarouselMarcas";
import styles from "./Marcas.module.scss";
import vtex from "../../assets/svg/Vtex.svg";

export default function Marcas() {
  const marcas = [];
  for (let i = 0; i < 10; i++) {
    marcas.push(
      <div key={i} className={styles.marcas}>
        <div className={styles.container}>
          <img src={vtex} alt="Vtex" />
        </div>
      </div>,
    );
  }

  return (
    <section>
      <Title title="Navegue por marcas" />
      <CarouselMarcas>{marcas}</CarouselMarcas>
    </section>
  );
}
