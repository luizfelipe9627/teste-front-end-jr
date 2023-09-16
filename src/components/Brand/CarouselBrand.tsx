import Slider from "react-slick";

interface CarouselBrandProps {
  children: React.ReactNode;
}

export default function CarouselBrand({ children }: CarouselBrandProps) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return <Slider {...settings} className="brand">{children}</Slider>;
}
