import React from 'react';
import { Flex } from '../App/App.styled';
import { TextTitle } from 'components/Common';
import StatisticsList from './StatisticsList';


export default function Statistics({ state }) {
  return (
    <Flex
      pt={4}
      width={350}
      flexDirection="column"
      flexWrap="wrap"
      alignItems="flex-start"
      alignContent="center"
    >
      <TextTitle title="Statistics" />
      <StatisticsList list={state} />
    </Flex>
  );
}
