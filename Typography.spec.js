import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Typography from '../Typography';

describe('Testing Typography component', () => {
  it('renders h1 Typography which has font-size: 60px', () => {
    const { container } = render(<Typography variant="h1"></Typography>);
    expect(container.firstChild).toHaveStyle('font-size: 60px');
  });

  it('renders h2 Typography which has font-size: 48px', () => {
    const { container } = render(<Typography variant="h2"></Typography>);
    expect(container.childNode[1]).toHaveStyle('font-size: 48px');
  });

  it('renders h3 Typography which has font-size: 34px;', () => {
    const { container } = render(<Typography variant="h3"></Typography>);
    expect(container.firstChild).toHaveStyle('font-size: 34px');
  });

  it('renders h4 Typography which has font-size: 24px;', () => {
    const { container } = render(<Typography variant="h4"></Typography>);
    expect(container.firstChild).toHaveStyle('font-size: 24px');
  });

  it('renders h5 Typography which has font-size: 20px;', () => {
    const { container } = render(<Typography variant="h5"></Typography>);
    expect(container.firstChild).toHaveStyle('font-size: 20px');
  });

  /* 
  it('renders hr Typography which has font-size: 60px;', () => {
    const { container } = render(<Typography variant="hr"></Typography>);
    expect(container.firstChild).toHaveStyle('font-size: 60px;');
  });

  it('renders p Typography which has font-size: 60px;', () => {
    const { container } = render(<Typography variant="p"></Typography>);
    expect(container.firstChild).toHaveStyle('font-size: 60px;');
  });
  */
});
