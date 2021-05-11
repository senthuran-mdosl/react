import styled from 'styled-components';
import theme from '../../theme/theme';
import { Typography as TypographyMaterialUi } from '@material-ui/core';

const { palette } = theme || {}; //is needed?
const colors = palette.common || {}; //is needed?

/* const h1 = styled.h1`
  width: 632px;
  height: 80px;
  margin: 46px 159px 42px 32px;
  font-family: OpenSans;
  font-size: 60px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
`;

const h2 = styled.h2`
  width: 678px;
  height: 64px;
  margin: 42px 113px 50px 32px;
  font-family: OpenSans;
  font-size: 48px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
`;

const h3 = styled.h3`
  width: 480px;
  height: 46px;
  margin: 50px 11px 43px 32px;
  font-family: OpenSans;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
`;

const h4 = styled.h4`
  width: 339px;
  height: 32px;
  margin: 43px 152px 42px 32px;
  font-family: OpenSans;
  font-size: 24px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
`;

const h5 = styled.h5`
  width: 305px;
  height: 27px;
  margin: 42px 186px 41px 32px;
  font-family: OpenSans;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: var(--black);
`;

const hr = styled.hr`

`; //awaiting style guide from Micheal

const p = styled.p`

`; //awaiting clarification to use body 1/2 or other or style guide

*/

export const TypographyMui = styled(TypographyMaterialUi)`
  &.variant {
    
    &:h1 {
      width: 632px;
      height: 80px;
      margin: 46px 159px 42px 32px;
      font-family: OpenSans;
      font-size: 60px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--black);
    }
    &:h2 {
      width: 678px;
      height: 64px;
      margin: 42px 113px 50px 32px;
      font-family: OpenSans;
      font-size: 48px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--black);
    }
    &:h3 {
      width: 480px;
      height: 46px;
      margin: 50px 11px 43px 32px;
      font-family: OpenSans;
      font-size: 34px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--black);
    }
    &:h4 {
      width: 339px;
      height: 32px;
      margin: 43px 152px 42px 32px;
      font-family: OpenSans;
      font-size: 24px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--black);
    }
    &:h5 {
      width: 305px;
      height: 27px;
      margin: 42px 186px 41px 32px;
      font-family: OpenSans;
      font-size: 20px;
      font-weight: 600;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: var(--black);
    }
    &:hr {

    }
    &:p {

    }
  }
`;

export default TypographyMui;

