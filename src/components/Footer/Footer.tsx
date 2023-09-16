import styles1 from "./Footer.module.scss";
import ListNav from "../ListNav/ListNav";
import facebook from "../../assets/svg/Facebook.svg";
import instagram from "../../assets/svg/Instagram.svg";
import youtube from "../../assets/svg/Youtube.svg";
import visa from "../../assets/svg/Visa.svg";
import elo from "../../assets/svg/Elo.svg";
import alelo from "../../assets/svg/Alelo.svg";
import dinners from "../../assets/svg/Dinners.svg";
import ifood from "../../assets/svg/Ifood.svg";
import mastercard from "../../assets/svg/Mastercard.svg";
import pix from "../../assets/svg/Pix.svg";
import amex from "../../assets/svg/Amex.svg";
import ticket from "../../assets/svg/Ticket.svg";
import sodexo from "../../assets/svg/Sodexo.svg";
import Newsletter from "../Newsletter/Newsletter";
import vtexIcon from "../../assets/svg/vtexIcon.svg";
import econverse from "../../assets/svg/econverse.svg";
import Copyright from "../Copyright/Copyright";

export default function Footer() {
  return (
    <footer className={styles1.footer}>
      <div className={styles1.top}>
        <ListNav
          title="Sobre nós"
          liText={["Conheça", "Como comprar", "Indicação e desconto"]}
          liHref={["#conheça", "#como-comprar", "#indicacao-e-desconto"]}
          img={[facebook, instagram, youtube]}
          imgHref={["#facebook", "#instagram", "#youtube"]}
        />
        <ListNav
          title="Informações úteis"
          liText={[
            "Fale conosco",
            "Dúvidas",
            "Prazo de entrega",
            "Formas de pagamento",
            "Política de privacidade",
            "Trocas e devoluções",
          ]}
          liHref={[
            "#fale-conosco",
            "#duvidas",
            "#prazo-de-entrega",
            "#formas-de-pagamento",
            "#politica-de-privacidade",
            "#trocas-e-devolucoes",
          ]}
        />
        <ListNav
          title="Formas de pagamento"
          className="formasDePagamento"
          img={[
            visa,
            elo,
            alelo,
            dinners,
            ifood,
            mastercard,
            pix,
            amex,
            ticket,
            sodexo,
          ]}
          imgHref={[
            "#visa",
            "#elo",
            "#alelo",
            "#dinners",
            "#ifood",
            "#mastercard",
            "#pix",
            "#amex",
            "#ticket",
            "#sodexo",
          ]}
        />
        <Newsletter
          title="Cadastre-se e Receba nossas"
          emphasis="novidades e promoções"
          text="Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum"
          placeholder="Seu e-mail"
          buttonText="OK"
        />
      </div>

      <div className={styles1.bottom}>
        <Copyright
          text="Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.  
          É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização."
          img={[econverse, vtexIcon]}
          alt={["Econverse", "Vtex"]}
          href={["#econverse", "#vtex"]}
        />
      </div>
    </footer>
  );
}
