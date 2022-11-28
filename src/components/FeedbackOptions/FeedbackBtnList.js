import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackButton';
import { Flex } from '../App/App.styled';

export default function FeedbackList({ state, btnClick }) {
  const id = Object.keys(state);
  return (
    <Flex justifyContent="space-around">
      {id.map(item => {
        return (
          <li key={item}>
            <FeedbackButton name={item} btnClick={btnClick} />
          </li>
        );
      })}
    </Flex>
  );
}

FeedbackList.propType = {
  state: PropTypes.shape.isRequired
};
