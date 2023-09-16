import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";

interface CarouselCategoriasProps {
  children: React.ReactNode;
}

export default function CarouselCategorias({ children }: CarouselCategoriasProps) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
  return (
    <Slider {...settings} className="categorias">
      {children}
    </Slider>
  );
}
