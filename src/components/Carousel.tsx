import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import "../styles/Carousel.css";

const Carousel = ({ pictures }: { pictures: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <div className="carousel-indicator">
        {`${currentIndex + 1}/${pictures.length}`}
      </div>
      <button
        className="carousel-button"
        style={{ left: 0 }}
        onClick={goToPrevious}
      >
        <BsChevronLeft size={50} stroke-width="1" />
      </button>
      <button
        className="carousel-button"
        style={{ right: 0 }}
        onClick={goToNext}
      >
        <BsChevronRight size={50} stroke-width="1" />
      </button>
    </div>
  );
};

export default Carousel;
