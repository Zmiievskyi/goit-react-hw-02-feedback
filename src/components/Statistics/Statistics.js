import React from 'react';
import { Flex } from '../App/App.styled';
import { TextTitle } from 'components/Common';
import StatisticsList from './StatisticsList';
import Notification from './Notification'

export default function Statistics({ state, total, count }) {
  return (
    <Flex
      pt={4}
      width={350}
      flexDirection="column"
      flexWrap="wrap"
      alignItems="flex-start"
    >
      <TextTitle title="Statistics" />
      {total() ? (
        <StatisticsList list={state} total={total()} count={count()} />
      ) : (
        <Notification message="No feedback given" />
      )}
    </Flex>
  );
}
