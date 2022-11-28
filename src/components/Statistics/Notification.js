import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '../App/App.styled';

export default function Notification({message}) {
  return (
    <Flex flexDirection="column" alignContent="space-around" flexWrap="wrap">
      <li>{message}</li>
    </Flex>
  );
}

Notification.propType = {
  message: PropTypes.string.isRequired,
};
