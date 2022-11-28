import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackButton.module';

export class FeedbackButton extends Component {
 
  handelMousedown = e => {
    e.preventDefault();
    this.props.btnDown(e.target.innerText);
  };

  render() {
    return (
      <Btn
        type="button"
        onMouseDown={this.handelMousedown}
      >
        {this.props.name}
      </Btn>
    );
  }
}

FeedbackButton.propType = {
  name: PropTypes.string.isRequired,
};
