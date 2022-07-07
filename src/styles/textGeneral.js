import styled, { css } from 'styled-components';

export const PrincipalTitle = styled.h1`
  font-size: 3.625em;
  font-weight: ${props => props.theme.weight.bold};
  text-align: center;
  margin: 0 0 52px 0;

  ${props => props.top && css`
    margin: 120px 0 52px 0;
  `}
`;

export const SecondaryTitle = styled.h2`
  font-size: 2.750em;
  font-weight: ${props => props.theme.weight.bold};
  margin: 0 0 42px 0;
`;

export const TertiaryTitle = styled.h2`
  font-size: 1.500em;
  font-weight: ${props => props.theme.weight.bold};
  margin: 0 0 32px 0;
`;

export const Text = styled.p`
  line-height: 1.500em;

  ${props => props.pragraph && css`
    margin: 0 0 10px 0
  `}

  ${props => props.centerReducer && css`
    padding: 0 10%;
    text-align: center;
  `}
`;
