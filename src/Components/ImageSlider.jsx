import React, { useEffect, useState } from 'react';


const ImageSlider = () => {
  const images = [
    'https://www.koimoi.com/wp-content/new-galleries/2024/03/godzilla-x-kong-the-new-empire-box-office-01.jpg',
    'https://cinemachords.com/wp-content/uploads/2024/04/atlas-jennifer-lopez-netflix-trailer-release-date-2024-cinemachords.jpg',
    'https://www.lhsimprint.com/wp-content/uploads/2022/03/Dune-Review.jpeg',
    'https://www.historyvshollywood.com/reelfaces/images/2022/12/oppenheimer/social.jpg',
    'https://i.ytimg.com/vi/YfshQkFaqXg/maxresdefault.jpg',
    'https://awsimages.detik.net.id/community/media/visual/2019/05/15/2a7038ed-c29a-494d-9e2d-58bf183c3574_43.jpeg?w=1200',
    'https://ntvb.tmsimg.com/assets/p24343038_v_h8_ac.jpg?w=1280&h=720'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 2 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider">
      <div
        className="slider-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
