import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
} from "../../assets/images";
import { useRef, useState } from "react";
import AppendDotsSlider from "./AppendDotsSlider";
import CostumArrowSlider from "./CostumArrowSlider";

const imageSlider: string[] = [
  sliderImage1,
  sliderImage2,
  sliderImage3,
  sliderImage4,
  sliderImage5,
];

export default function Carousel() {
  let arrowRef = useRef<Slider | null>(null);
  const [toggleArrowSlider, setToggleArrowSlider] = useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 6000,
    arrows: false,
    cssEase: "ease-in-out",
    appendDots: (dots: any) => <AppendDotsSlider dots={dots} />,
  };

  const next = () => {
    arrowRef?.current?.slickNext();
  };

  const prev = () => {
    arrowRef?.current?.slickPrev();
  };

  return (
    <div className="relative" onMouseLeave={() => setToggleArrowSlider(false)}>
      <Slider
        {...settings}
        ref={(slider) => {
          arrowRef.current = slider;
        }}
        appendDots={(dots) => <AppendDotsSlider dots={dots} />}
        className={`relative rounded-2xl bg-black h-[340px] w-full overflow-hidden`}
      >
        {imageSlider.map((image, index) => (
          <div className={`bg-blue-700 h-[340px]`} key={index}>
            <img
              onMouseOver={() => setToggleArrowSlider(true)}
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-full"
            />
          </div>
        ))}
      </Slider>
      <CostumArrowSlider
        type="next"
        onClick={next}
        isActive={toggleArrowSlider}
      />
      <CostumArrowSlider
        type="prev"
        onClick={prev}
        isActive={toggleArrowSlider}
      />
    </div>
  );
}
