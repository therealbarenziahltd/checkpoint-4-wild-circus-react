import React from 'react';
import { Media } from 'reactstrap';

const CommentaryCard = ({author, content, emoteUrl}) => {
  return (
    <Media>
      <Media left href="#">
        <Media object data-src={emoteUrl} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          {author}    
        </Media>
        {content}
      </Media>
    </Media>
  );
};

export default CommentaryCard;