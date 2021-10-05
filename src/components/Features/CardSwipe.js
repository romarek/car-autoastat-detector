import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const bigphoto =
  'https://images.pexels.com/photos/1131575/pexels-photo-1131575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

function CardSwipe() {
  return (
    <LazyLoadImage
      src={bigphoto}
      alt="Photo"
      width={'100%'}
      height={'100%'}
      style={{ objectFit: 'cover' }}
      effect="blur"
    />
  );
}
export default CardSwipe;
