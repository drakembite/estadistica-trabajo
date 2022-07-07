import styled from 'styled-components';
import background from './../../../images/background.png'

export const CoverPageContainer = styled.section`
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1, h2 {
    text-align: center;
    font-weight: ${props => props.theme.weight.extraBold};
    color: ${props => props.theme.white};
  }

  h1 {
    font-size: 4.500em;
    margin: 0 0 10px 0;
  }

  h2 {
    font-size: 2.750em;
  }
`;

export const LandingPageContainer = styled.div`
  .buttonFinal {
    display: flex;
    justify-content: center;
  }
`;
