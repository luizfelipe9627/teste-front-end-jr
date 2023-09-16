import Slider from "react-slick";

interface CarouselCategoryProps {
  children: React.ReactNode;
}

export default function CarouselCategory({ children }: CarouselCategoryProps) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
  };
  return (
    <Slider {...settings} className="category">
      {children}
    </Slider>
  );
}
