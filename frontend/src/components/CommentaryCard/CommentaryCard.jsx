import React from 'react';
import { Media } from 'reactstrap';
import './CommentaryCard.scss';

const CommentaryCard = ({author, content, date}) => {
  return (
    <div className='commentary-card'>
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
          <Media heading className='custom-container'>
            <p className="author-style">{author}</p>
            <p className="date-commentary-style"> , the {date}</p>
          </Media>
          <em>"{content}"</em>
        </Media>
      </Media>
    </div>
  );
};

export default CommentaryCard;