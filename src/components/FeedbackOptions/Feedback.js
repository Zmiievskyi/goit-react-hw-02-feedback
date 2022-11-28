import React from 'react';
import { FeedbackBtnList } from 'components/FeedbackOptions/';
import { TextTitle } from 'components/Common';
import { Box } from '../App/App.styled';

export default function Feedback({ state, btnClick }) {
  // console.log(props);
  return (
    <Box pt={4} width={350}>
      <TextTitle title="Please leave feedback" />
      <FeedbackBtnList state={state} btnClick={btnClick}/>
    </Box>
  );
}
