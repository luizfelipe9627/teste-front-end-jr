import Banner from "../Banner/Banner";
import Categorias from "../Categoria/Categoria";
import Parceiros from "../Parceiros/Parceiros";
import Vitrine from "../Vitrine/Vitrine";
import Produtos from "../Produtos/Produtos";
import Marcas from "../Marcas/Marcas";

export default function Main() {
  return (
    <main>
      <Banner />
      <Categorias />
      <Vitrine />
      <Parceiros />
      <Produtos />
      <Marcas />
    </main>
  );
}
