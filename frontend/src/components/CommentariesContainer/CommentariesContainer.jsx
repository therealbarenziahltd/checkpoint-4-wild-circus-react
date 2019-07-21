import React, { Component } from 'react';
import Axios from 'axios';
import CommentaryCard from '../CommentaryCard/CommentaryCard';
import { Container, Col, Row } from 'reactstrap';
import prettifyDate from '../../utils/prettifyDate';

export default class CommentariesContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      commentaries: []
    };
  }
  componentDidMount() {
    Axios.get('http://localhost:5000/api/comments', {
    }
    )
      .then((res) => {
        this.setState({commentaries: res.data.commentaries});
      })
      .catch((err) => err);
  }
  
  
  render() {
    return (
      <div>
        
        <Container>
          <Row>
            {this.state.commentaries.map((commentary, index) => {
              return <Col 
                xs='12'
                md='12'  
                key={index} 
              >
                <CommentaryCard 
                  author={commentary.userId} 
                  content={commentary.content}
                  date={prettifyDate(commentary.createdAt)} 
                  emoteUrl="https://picsum.photos/200/200"
                />;
              </Col>;
            })}
          </Row>
        </Container>
      </div>
    );
  }
}
