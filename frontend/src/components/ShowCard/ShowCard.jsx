import React from 'react';
import ShowPicturesCarousel from './ShowPicturesCarousel';
import './ShowCard.scss';

const ShowCard = ({city, date, pictures}) => {
  return (
   <>
   <div className='custom-container'> 
     <p className="city-style">{city}</p>
     <p className="date-style"> , the {date}</p>
   </div>
                   
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