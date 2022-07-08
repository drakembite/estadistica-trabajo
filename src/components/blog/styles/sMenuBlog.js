import styled from 'styled-components';

export const MenuBlogContainer = styled.nav`
  padding: 50px 0;

  a {
    color: ${props => props.theme.black};
    padding: 9px 0;
    display: block;
  }

  .principalTitle {
    a {
      font-weight: ${props => props.theme.weight.bold};
      font-size: 1em;
    }
  }

  .secondaryTitles {
    a {
      font-weight: ${props => props.theme.weight.medium};
      font-size: 0.875em;
    }
  }
`;
