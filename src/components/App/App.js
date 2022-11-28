import React, { Component } from 'react';
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

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percent = ((this.state.GOOD * 100) / this.countTotalFeedback()).toFixed(0);
    return percent
  };

  feedbackHandler = data => {
    this.setState(prevState => {
      return {
        [data]: prevState[data] + 1,
      };
    });
  };

  render() {
    return (
      <Flex alignItems="center" flexDirection="column">
        <Feedback
          state={this.state}
          btnDown={this.feedbackHandler}
        />
        <Statistics
          state={this.state}
          total={this.countTotalFeedback}
          count={this.countPositiveFeedbackPercentage}
        />
        <GlobalStyle />
      </Flex>
    );
  }
}

export default App;
