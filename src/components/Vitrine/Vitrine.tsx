import Card from "../Card/Card";
import SquareNav from "../SquareNav/SquareNav";
import TitleData from "../Title/Title";

export default function Vitrine() {
  return (
    <section>
      <TitleData title="Produtos relacionados" lines/>
      <SquareNav />
      <Card />
    </section>
  );
}
