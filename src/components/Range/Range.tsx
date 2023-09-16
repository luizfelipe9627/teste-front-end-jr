import escudo from "../../assets/svg/shieldCheck.svg";
import caminhao from "../../assets/svg/truck.svg";
import cartao from "../../assets/svg/creditCard.svg";
import styles from "./Range.module.scss";

type FlexDirection = "row" | "row-reverse" | "column" | "column-reverse";

interface RangeDataProps {
  img?: string;
  alt?: string;
  emphasis: string;
  text: string;
  direction?: FlexDirection;
}

export function RangeData({
  img,
  alt,
  emphasis,
  text,
  direction = "row-reverse",
}: RangeDataProps) {
  return (
    <div className={styles.rangeData}>
      <img src={img} alt={alt} />
      <p style={{ flexDirection: direction }}>
        {text} <span>{emphasis}</span>
      </p>
    </div>
  );
}

export default function Range() {
  return (
    <div className={styles.range}>
      <RangeData
        img={escudo}
        alt="Escudo"
        text="Compra"
        emphasis="100% segura"
      />
      <RangeData
        img={caminhao}
        alt="Caminhão"
        text="acima de R$ 200"
        emphasis="Frete grátis"
      />
      <RangeData
        img={cartao}
        alt="Cartão de crédito"
        text="suas compras"
        emphasis="Parcele"
      />
    </div>
  );
}
