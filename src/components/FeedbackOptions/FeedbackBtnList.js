import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackButton';
import { Flex } from '../App/App.styled';

export default function FeedbackList({ state, btnUp, btnDown }) {
  return (
    <Flex >
      <li>
        <FeedbackButton name={'good'} btnUp={btnUp} btnDown={btnDown} />
      </li>
      <li>
        <FeedbackButton name={'neutral'} btnUp={btnUp} btnDown={btnDown} />
      </li>
      <li>
        <FeedbackButton name={'bad'} btnUp={btnUp} btnDown={btnDown} />
      </li>
    </Flex>
  );
}

FeedbackList.propType = {
  state: PropTypes.shape.isRequired,
};
