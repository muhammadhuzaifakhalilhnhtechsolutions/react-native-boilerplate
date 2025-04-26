import React from 'react';
import AfterLogin from './AfterLogin';
import BeforeLogin from './BeforeLogin';

const Navigator = () => {
  const token = false; // Replace with your actual token logic

  return token ? <AfterLogin /> : <BeforeLogin />;
};

export default Navigator;
