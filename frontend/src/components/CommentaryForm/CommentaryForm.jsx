import React from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import { connect } from 'react-redux';
import './CommentaryForm.scss';
import Axios from 'axios';

class CommentaryForm extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      content: ''
    };
    this.post = this.post.bind(this);
  }

  componentDidMount() {
    console.log(this.state, '...state');
    console.log(this.props, '...props');
    console.log('token?', this.props.authentification.user.token);
  }
  
  updateProperty = (property, value) => {
    let content = this.state.content;
    content = value;
    this.setState({ content: content });
  }

  post(){
    Axios({
      method: 'post',
      url: '/api/comments',
      data: {
        content: this.state.content,
        userId: this.props.authentification.user.id
      },
      headers: {
        Authorization: `bearer ${this.props.authentification.user.token}`
      }
    });
  }

  render() {
    if (this.props.authentification.user.isConnected) {
      return (
        <Form className='my-form-container'>
          <FormGroup>
            <Input 
              type="textarea" 
              name="text" 
              id="exampleText" 
              className='my-text-area'
              onChange={(e) => this.updateProperty('content', e.target.value)}
              />
          </FormGroup>
          <Button 
            onClick={this.post}
            className='my-form-button'
          >Post !</Button>
        </Form>
      );
    }
    else return null; 
  }
}


const mapStateToProps = (state) => ({
  ...state
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentaryForm);