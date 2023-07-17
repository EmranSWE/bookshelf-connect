import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/feature-image/book 10.png";
import slider2 from "../../assets/feature-image/book1.jpg";
import slider3 from "../../assets/feature-image/book2.jpeg";
import slider4 from "../../assets/feature-image/book3.jpg";
import slider5 from "../../assets/feature-image/book4.jpeg";
export default function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "step(4)",
  };

  const Sliders = [slider1, slider2, slider3, slider4, slider5];
  return (
    <div>
      <Slider {...settings}>
        {Sliders.map((slide) => (
          <div className="px-2">
            <img className="w-full h-60" src={slide} alt="slide image" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
