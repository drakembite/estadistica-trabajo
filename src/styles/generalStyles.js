import styled, { css } from 'styled-components';

const mixinWrapper = css`
  @media(min-width:360px) {
    padding: 0 20px;
  }
  @media(min-width:375px) {
    padding: 0 25px;
  }
  @media(min-width:768px) {
    padding: 0 18%;
  }
  @media(min-width:1024px) {
    padding: 0 15%;
  }
`

export const Wrapper = styled.div`
  ${mixinWrapper}

  @media(min-width:1200px) {
    padding: 0;
    margin: ${props => props.margin || '0 auto'};
    width: ${props => props.width || '1100px'};
  }
`
