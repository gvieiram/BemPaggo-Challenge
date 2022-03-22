import React from 'react';

import { Container } from './styles';

interface FooterProps {
  buttonText: string;
  buttonType?: 'submit' | 'reset' | 'button' | undefined;
}

export function Footer({buttonText, buttonType}: FooterProps) {
  return (
    <Container>
      <button type={buttonType}>{buttonText}</button>
    </ Container>
  );
}
