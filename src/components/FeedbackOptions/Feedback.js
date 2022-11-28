import React from 'react';
import { FeedbackBtnList } from 'components/FeedbackOptions/';
import { TextTitle } from 'components/Common';
import { Box } from '../App/App.styled';

export default function Feedback({ state, btnDown, btnUp }) {
  return (
    <Box pt={4} width={350}>
      <TextTitle title="Please leave feedback" />
      <FeedbackBtnList state={state} btnDown={btnDown} btnUp={btnUp}/>
    </Box>
  );
}
