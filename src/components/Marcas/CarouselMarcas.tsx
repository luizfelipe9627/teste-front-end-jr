import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";

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
