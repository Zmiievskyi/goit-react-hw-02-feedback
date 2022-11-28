import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Flex } from './App.styled';
import { Feedback } from 'components/FeedbackOptions/';
import { GlobalStyle } from 'components/GlobalStyle';
import Statistics from 'components/Statistics/Statistics';

class App extends Component {
  state = {
    GOOD: 0,
    NEUTRAL: 0,
    BAD: 0,
  };

  feedbackHandler = data => {
    this.setState(prevState => {
      return { 
        [data]: prevState[data] + 1 
      };
    });
  }

  decrement() {}

  render() {
    return (
      <Flex alignItems="center" flexDirection="column">
        <Feedback state={this.state} btnClick={this.feedbackHandler} />
        <Statistics state={this.state} />
        <GlobalStyle />
      </Flex>
    );
  }
}

export default App;
