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
import styles from "./Category.module.scss";
import CarouselCategory from "./CarouselCategory";

interface CategoryDataProps {
  title?: string;
  img: string;
  active?: boolean;
  className?: string;
}

function CategoryData({ title, img, className }: CategoryDataProps) {
  return (
    <li className={`${styles.categoryData} ${className}`}>
      {img && (
        <button className={styles.container}>
          <img src={img} alt={title} />
        </button>
      )}

      {title && <h2>{title}</h2>}
    </li>
  );
}

export default function Category() {
  return (
    <section className={styles.category}>
      <CarouselCategory>
        <CategoryData
          img={tecnologia}
          title="Tecnologia"
          className={styles.active}
        />
        <CategoryData img={supermercado} title="Supermercado" />
        <CategoryData img={bebida} title="Bebidas" />
        <CategoryData img={ferramenta} title="Ferramentas" />
        <CategoryData img={saude} title="Saúde" />
        <CategoryData img={corrida} title="Esportes e Fitness" />
        <CategoryData img={moda} title="Moda" />
        <CategoryData img={mercado} title="Mercado" />
        <CategoryData img={padaria} title="Padaria" />
        <CategoryData img={oriental} title="Oriental" />
      </CarouselCategory>
    </section>
  );
}
