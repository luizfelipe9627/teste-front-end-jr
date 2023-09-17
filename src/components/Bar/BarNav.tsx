import styles from "./BarNav.module.scss";
import crown from "../../assets/svg/crownSimple.svg";

interface BarNavDataProps {
  aText: string;
  aHref: string;
  img?: string;
  altImg?: string;
  className?: string;
}

function BarNavData({ aText, aHref, img, altImg, className }: BarNavDataProps) {
  return (
    <li className={className}>
      {img && <img src={img} alt={altImg} />}
      <a href={aHref}>{aText}</a>
    </li>
  );
}

export default function BarNav() {
  return (
    <nav className={styles.barNav}>
      <ul>
        <BarNavData aText="Todas as categorias" aHref="#todas-ascategorias" />
        <BarNavData aText="Supermercado" aHref="#supermercado" />
        <BarNavData aText="Livros" aHref="#livros" />
        <BarNavData aText="Moda" aHref="#moda" />
        <BarNavData aText="Lançamentos" aHref="#lancamentos" />
        <BarNavData
          aText="Ofertas do dia"
          aHref="#ofertas-do-dia"
          className={styles.active}
        />
        <BarNavData
          aText="Assinatura"
          aHref="#assinatura"
          img={crown}
          altImg="Coroa"
        />
      </ul>
    </nav>
  );
}
