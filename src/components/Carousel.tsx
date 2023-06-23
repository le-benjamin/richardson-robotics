import { ReactNode, useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaRegCircle, FaCircle } from 'react-icons/fa'

let interval: any = null; // Declare the interval variable outside the component function

const Carousel = ({ children, slides, autoSlide=false, autoSlideInterval=5000} : { children:ReactNode, slides:any[], autoSlide:boolean, autoSlideInterval:number}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === 0 ? slides.length-1 : currentIndex-1));
    resetInterval();
  }
  
  const nextSlide = () => {
    setCurrentIndex((currentIndex) => (currentIndex === slides.length-1 ? 0 : currentIndex+1));
    resetInterval();
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    resetInterval();
  }

  const resetInterval = () => {
    if (autoSlide) {
      clearInterval(interval);
      interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);
    }
  }

  useEffect(() => {
    if (autoSlide) {
      interval = setInterval(() => {
        nextSlide();
      }, autoSlideInterval);

      return () => {
        clearInterval(interval);
      };
    }
  }, [autoSlide, autoSlideInterval]);


  return (
    <div className="max-w-[1400px] h-[50vh] md:h-[70vh] w-full m-auto py-4 px-4 relative group">
      <div 
        style={{ backgroundImage: `url(${slides[currentIndex].img})` }}
        className="w-full h-full bg-cover bg-center duration-500"
      >
        {children}
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <FaChevronLeft onClick={prevSlide} size={24}/>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 text-white cursor-pointer">
          <FaChevronRight onClick={nextSlide} size={24}/>
      </div>

      <div className="flex top-4 justify-center py-4 gap-1">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className="text-white cursor-pointer "
            >
              {currentIndex === index ? <FaCircle size={10}/> : <FaRegCircle size={10}/>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel