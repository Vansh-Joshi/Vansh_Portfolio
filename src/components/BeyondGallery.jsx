import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mediaItems = [
  {type:'image', src: '/assets/beyondgallery/ngo.jpeg', caption: 'Anoopam Mission NGO work' },
  {type:'image', src: '/assets/beyondgallery/jamming.jpeg', caption: 'Random Jamming' },
  {type:'image', src: '/assets/beyondgallery/mf23.JPEG', caption: 'Music Fest 2023' },
  // {type:'image', src: '/assets/beyondgallery/mf23.JPEG', caption: 'Alumni Meetup Session' },
  {type:'image', src: '/assets/beyondgallery/travel.jpeg', caption: 'Travel' },
  {type:'video', src: '/assets/beyondgallery/live_perform.mp4', caption: 'Live Performance' },
  {type:'image', src: '/assets/beyondgallery/travel-3.jpg', caption: 'Go to place' }
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
    <div className="max-w-4xl mx-auto"> 
<Slider {...settings}>
  
  {mediaItems.map(({ type, src, caption }, idx) => (
    <div key={idx} className="px-2 mt-10 mb-10">
      {type === 'image' ? (
        <img
          src={src}
          alt={caption}
          className="w-full rounded-xl shadow-md"
        />
      ) : (
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
        <video
          src={src}
          controls
          muted
          playsInline
          className="w-full rounded-xl shadow-md"
          preload="metadata"
          poster="/assets/beyondgallery/live_perf_thumbnail.jpg" // optional custom thumbnail
        />
        </div>
      )}
      <p className="mt-2 text-center text-gray-700 font-medium">{caption}</p>
    </div>
  ))}
</Slider>
    </div>
  );
}
