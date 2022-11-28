import React from 'react';
import PropTypes from 'prop-types';
// import { Box } from 'theme-ui';
import { Flex } from '../App/App.styled';

export default function StatisticsList( {list} ) {
  const id = Object.keys(list);
  
  return (
    <Flex flexDirection="column" alignContent="space-around" flexWrap="wrap">
      {id.map(item => {
        return <li key={item}>{item}:   {list[item]}</li>;
      })}
    </Flex>
  );
}

StatisticsList.propType = {
  list: PropTypes.shape.isRequired,
};
