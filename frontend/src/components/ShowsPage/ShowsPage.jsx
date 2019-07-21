import React, { Component } from 'react';
import Axios from 'axios';
import ShowCard from '../ShowCard/ShowCard';
import { Container, Col, Row } from 'reactstrap';
import prettifyDate from '../../utils/prettifyDate';
import ShowPicturesCarousel from '../ShowCard/ShowPicturesCarousel';

export default class ShowsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows:[]
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/shows', {
    }
    )
      .then((res) => {
        console.log(res);
        this.setState({shows: res.data.shows});
      })
      .catch((err) => err);
  }
  render() {
    return (
      <Container>
        <Row>
          {this.state.shows.map((show, index) => {
            return <Col 
              xs='12' 
              md='12'
              key={index} 
            >
              <ShowCard 
                city={show.city}
                date={prettifyDate(show.date)}
                pictures={show.pictures}
              />;
            </Col>;
          })}
        </Row>
      </Container>
    );
  }
}
