import React from 'react';
import CommentaryForm from '../CommentaryForm/CommentaryForm';
import CommentariesContainer from '../CommentariesContainer/CommentariesContainer';

export default function GoldenBookPage() {
  return (
    <div>
      <p>GoldenBookPage component</p>
      <CommentaryForm />
      <CommentariesContainer />
    </div>
  );
}
