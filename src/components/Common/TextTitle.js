import React from 'react';
import PropTypes from 'prop-types';
import { Title } from './TextTitle.module';


export default function TextTitle({title}) {
  return title ? <Title>{title}</Title> : 'Are you happy enough?';
}


TextTitle.propType = {
  title: PropTypes.string,
};