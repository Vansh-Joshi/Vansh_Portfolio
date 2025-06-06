import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  { src: 'src/assets/vansh_profile.jpeg', caption: 'Music Fest 2023' },
  { src: 'src/assets/vansh_profile.jpeg', caption: 'Club Performance' },
  { src: 'src/assets/vansh_profile.jpeg', caption: 'Volunteer Event' },
  { src: 'src/assets/vansh_profile.jpeg', caption: 'Photography Trip' },
  { src: 'src/assets/vansh_profile.jpeg', caption: 'Workshop Session' },
];

export default function BeyondGallery() {
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    arrows: true,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Slider {...settings}>
        {images.map(({ src, caption }, idx) => (
          <div key={idx} className="px-2">
            <img
              src={src}
              alt={caption}
              className="w-full rounded-xl shadow-md"
              style={{ cursor: 'pointer' }}
            />
            <p className="mt-2 text-center text-gray-700 font-medium">{caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
