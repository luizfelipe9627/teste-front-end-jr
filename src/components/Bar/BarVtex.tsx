import styles from "./BarVtex.module.scss";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/magnifyingGlass.svg";
import box from "../../assets/svg/box.svg";
import heart from "../../assets/svg/heart.svg";
import user from "../../assets/svg/userCircle.svg";
import cart from "../../assets/svg/shoppingCart.svg";
import Input from "../Input/Input";

export default function BarVtex() {
  return (
    <div className={styles.barVtex}>
      <a href="#vtex">
        <img src={logo} alt="Logo Vtex" />
      </a>

      <form className={styles.form}>
        <Input
          type="text"
          placeholder="O que está buscando?"
          id="search"
          name="search"
          required
        />
        <button>
          <img src={search} alt="Lupa de pesquisa" />
        </button>
      </form>

      <div className={styles.icons}>
        <a href="#caixa">
          <img src={box} alt="Caixa" />
        </a>
        <a href="#coracao">
          <img src={heart} alt="Coração" />
        </a>
        <a href="#usuario">
          <img src={user} alt="Usuário" />
        </a>
        <a href="#carrinho">
          <img src={cart} alt="Carrinho de compra" />
        </a>
      </div>
    </div>
  );
}
