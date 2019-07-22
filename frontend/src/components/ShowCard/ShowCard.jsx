import React from 'react';
import ShowPicturesCarousel from './ShowPicturesCarousel';

const ShowCard = ({city, date, pictures}) => {
  return (
   <>
      <p>  {city}, the {date}</p>     
          
          {
            pictures ?
              <ShowPicturesCarousel pictures={pictures} />
              :
              null
          }
          </>
  );
};

export default ShowCard;