import SquareNavData, { SquareNavDataProps } from "./SquareNavData";

export default function Nav() {
  const titles: SquareNavDataProps[] = [
    { title: "Celular", href: "/#celular", active: true },
    { title: "Acessórios", href: "/#acessorios" },
    { title: "Tablets", href: "/#tablets" },
    { title: "Notebooks", href: "/#notebooks" },
    { title: "Tvs", href: "/#tvs" },
    { title: "Ver todos", href: "/#ver-todos" },
  ];

  return <SquareNavData titles={titles} />;
}
