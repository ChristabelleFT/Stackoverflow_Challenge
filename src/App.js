import React, {Component} from 'react';
import Header from './section/Header';
import Content from './section/Content';
import { Row } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Row>
        <Header/>
        <Content/>
      </Row>
    );
  }
}

export default App;
