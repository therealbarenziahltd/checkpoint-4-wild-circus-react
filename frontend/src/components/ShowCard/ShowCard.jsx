import React from 'react';
import { Media } from 'reactstrap';
import ShowPicturesCarousel from './ShowPicturesCarousel';

const ShowCard = ({city, date, pictures}) => {
  return (
    <Media>
      <Media left href="#">
        <Media body>
          <Media heading>
            {city}, the {date}  
          </Media>
          {
            pictures ?
              <ShowPicturesCarousel pictures={pictures} />
              :
              null
          }
        </Media>
      </Media>
    </Media>
  );
};

export default ShowCard;