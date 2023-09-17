import Slider from "react-slick";

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
