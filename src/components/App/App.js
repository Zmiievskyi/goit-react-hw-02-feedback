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
    TOTAL: 0,
    'Positive percentage': 0,
  };

  feedbackHandler = data => {
    this.setState(prevState => {
      return {
        [data]: prevState[data] + 1,
        TOTAL: this.totalHandler(),
      };
    });
  };

  positiveHandler = () => {
    this.setState({
      'Positive percentage': (
        (this.state.GOOD * 100) /
        this.state.TOTAL
      ).toFixed(0)+'%',
    });
  };

  totalHandler = () => {
    return Object.values(this.state)
      .splice(0, 3)
      .reduce((acc, item) => {
        return acc + item;
      }, 1);
  };

  render() {
    return (
      <Flex alignItems="center" flexDirection="column">
        <Feedback
          state={this.state}
          btnDown={this.feedbackHandler}
          btnUp={this.positiveHandler}
        />
        <Statistics state={this.state} />
        <GlobalStyle />
      </Flex>
    );
  }
}

export default App;
