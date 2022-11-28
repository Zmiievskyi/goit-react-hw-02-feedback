import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackButton';
import { Flex } from '../App/App.styled';

export default function FeedbackList({ state, btnDown }) {
  const names = Object.keys(state)
  return (
    <Flex>
      {names.map(item => {
        return (
          <li key ={item}>
            <FeedbackButton name={item} btnDown={btnDown} />
          </li>
        );
      })}
    </Flex>
  );
}

FeedbackList.propType = {
  state: PropTypes.shape.isRequired,
};
