import React from 'react';
import { Media } from 'reactstrap';

const CommentaryCard = ({author, content, date}) => {
  return (
    <Media>
      <Media left href="#">
        <Media 
          object 
          data-src="https://picsum.photos/200/200" 
          src="https://picsum.photos/200/200"
          style={{height:'100px'}}
          alt="=(" />
      </Media>
      <Media body>
        <Media heading>
          {author}, written the {date}  
        </Media>
        {content}
      </Media>
    </Media>
  );
};

export default CommentaryCard;