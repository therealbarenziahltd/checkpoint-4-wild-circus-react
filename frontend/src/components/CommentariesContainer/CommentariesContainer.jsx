import React, { Component } from 'react';
import Axios from 'axios';
import CommentaryCard from '../CommentaryCard/CommentaryCard';
import { Container, Col, Row } from 'reactstrap';
import prettifyDate from '../../utils/prettifyDate';

export default class CommentariesContainer extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      commentaries: [],
      formatedComments: []
    };
  }
  componentDidMount = async () => {
    await Axios.get('http://localhost:5000/api/comments', {
    }
    )
      .then((res) => {
        this.setState({commentaries: res.data.commentaries});
      })
      .catch((err) => err);
    await Axios.get('http://localhost:5000/api/users', {
    }
    )
      .then((res) => {
        this.setState({users: res.data.users});
      })
      .catch((err) => err);
    await this.replaceUserIdByUserName(this.state.commentaries, this.state.users);
  }

replaceUserIdByUserName = (rawCommentsArray, usersArray) => {
let x = rawCommentsArray.map((comment) => {
  return {
    ...comment,
    userId: usersArray.filter((user) => user.id === comment.userId)[0]
  }
}) 
// this.setState(formatedComments)
this.setState({formatedComments: x})
}
  
  
  render() {
    return (
      <div>
        
        <Container>
          <Row>
            {this.state.formatedComments.map((commentary, index) => {
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
