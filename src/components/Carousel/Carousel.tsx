import Slider from "react-slick";

import "./SlickTheme.scss";
import "./Slick.scss";

interface CarouselProps {
  children: React.ReactNode;
}

export default function Carousel({ children }: CarouselProps) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    width: 230,
  };
  return <Slider {...settings}>{children}</Slider>;
}
