import Card from "../Card/Card";
import Nav from "../Nav/Nav";
import TitleData from "../Title/Title";

export default function Vitrine() {
  return (
    <section>
      <TitleData title="Produtos relacionados" lines/>
      <Nav />
      <Card />
    </section>
  );
}
