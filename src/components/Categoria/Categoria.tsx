import tecnologia from "../../assets/img/tecnologia.png";
import supermercado from "../../assets/img/supermercado.png";
import bebida from "../../assets/img/bebida.png";
import ferramenta from "../../assets/img/ferramenta.png";
import saude from "../../assets/img/saude.png";
import corrida from "../../assets/img/corrida.png";
import moda from "../../assets/img/moda.png";
import mercado from "../../assets/img/mercado.png";
import padaria from "../../assets/img/padaria.png";
import oriental from "../../assets/img/oriental.png";
import styles from "./Categorias.module.scss";
import CarouselCategorias from "./CarouselCategorias";

interface CategoriaDataProps {
  title?: string;
  img: string;
  active?: boolean;
  className?: string;
}

function CategoriaData({ title, img, className }: CategoriaDataProps) {
  return (
    <li className={`${styles.categoriasData} ${className}`}>
      {img && (
        <button className={styles.container}>
          <img src={img} alt={title} />
        </button>
      )}

      {title && <h2>{title}</h2>}
    </li>
  );
}

export default function Categorias() {
  return (
    <section className={styles.categorias}>
      <CarouselCategorias>
        <CategoriaData
          img={tecnologia}
          title="Tecnologia"
          className={styles.active}
        />
        <CategoriaData img={supermercado} title="Supermercado" />
        <CategoriaData img={bebida} title="Bebidas" />
        <CategoriaData img={ferramenta} title="Ferramentas" />
        <CategoriaData img={saude} title="Saúde" />
        <CategoriaData img={corrida} title="Esportes e Fitness" />
        <CategoriaData img={moda} title="Moda" />
        <CategoriaData img={mercado} title="Mercado" />
        <CategoriaData img={padaria} title="Padaria" />
        <CategoriaData img={oriental} title="Oriental" />
      </CarouselCategorias>
    </section>
  );
}
