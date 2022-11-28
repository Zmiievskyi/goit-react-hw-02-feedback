import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Btn } from './FeedbackButton.module';

export class FeedbackButton extends Component {

handelClick = e =>{
    e.preventDefault();

    this.props.btnClick(e.target.innerText);
    // console.log(e.target.innerText);
}

  render() {
    return (
      <Btn type="button" onClick={this.handelClick}>
        {this.props.name}
      </Btn>
    );
  }
}

FeedbackButton.propType = {
  name: PropTypes.string.isRequired,
};
