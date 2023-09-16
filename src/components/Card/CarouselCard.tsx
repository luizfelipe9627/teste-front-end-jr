import Slider from "react-slick";

import "../../../node_modules/slick-carousel/slick/slick.scss";
import "../../../node_modules/slick-carousel/slick/slick-theme.scss";

interface CarouselCardProps {
  children: React.ReactNode;
}

export default function CarouselCard({ children }: CarouselCardProps) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    width: 230,
  };
  return (
    <Slider {...settings} className="card">
      {children}
    </Slider>
  );
}
