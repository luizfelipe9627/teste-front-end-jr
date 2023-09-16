import Slider from "react-slick";

interface CarouselMarcasProps {
  children: React.ReactNode;
}

export default function CarouselMarcas({ children }: CarouselMarcasProps) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return <Slider {...settings} className="marcas">{children}</Slider>;
}
