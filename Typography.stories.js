import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 90vh;
`;

export const TypographyComponent = (args) => {
  return (
    <Container>
      <Typography variant="h1">H1 Testing Typography</Typography>
      <Typography variant="h2">H2 Testing Typography</Typography>
      <Typography variant="h3">H3 Testing Typography</Typography>
      <Typography variant="h4">H4 Testing Typography</Typography>
      <Typography variant="h5">H5 Testing Typography</Typography>
      <Typography variant="hr">HR Testing Typography</Typography>
      <Typography variant="p">P Testing Typography</Typography>
      <h1>H1 Tag Sample</h1>
        <h2>H2 Tag Sample</h2>
        <h3>H3 Tag Sample</h3>
        <h4>H4 Tag Sample</h4>
        <h5>H5 Tag Sample</h5>
        <hr></hr>
        <p>P Tag Sample</p>
        <h1/>
        <h2/>
    </Container>
  );
};

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {

  }
};
