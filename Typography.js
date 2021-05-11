import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { TypographyMui } from './styled';
// import { h1, h2, h3, h4, h5, hr, p } from './styled';

const Typographyh1 = memo(() => {
  return (<Typography variant="h1"></Typography>);
});

const Typographyh2 = memo(() => {
  return (<Typography variant="h2"></Typography>);
});

const Typographyh3 = memo(() => {
  return (<Typography variant="h3"></Typography>);
});

const Typographyh4 = memo(() => {
  return (<Typography variant="h4"></Typography>);
});

const Typographyh5 = memo(() => {
  return (<Typography variant="h5"></Typography>);
});

const Typographyhr = memo(() => {
  return (<Typography variant="hr"></Typography>);
});

const Typographyp = memo(() => {
  return (<Typography variant="p"></Typography>);
});

Typography.displayName = 'Typography';

export default Typography;

// export { h1, h2, h3, h4, h5, hr, p };