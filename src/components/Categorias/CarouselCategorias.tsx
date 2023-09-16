import Slider from "react-slick";

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
