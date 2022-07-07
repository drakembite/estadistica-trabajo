import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  font-size: 0.875em;
  margin: 100px 0 0 0;

  p {
    text-align: center;
    margin: 11px 0;
  }
`;
