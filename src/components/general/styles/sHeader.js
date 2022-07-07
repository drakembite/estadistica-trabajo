import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: ${props => props.type == 'content' ? 'static' : 'fixed'};
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.gray1};
`;

export const HeaderContent= styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-weight: ${props => props.theme.weight.semiBold};

  ul {
    display: flex;
    gap: 20px;
  }

  a {
    color: ${props => props.type == 'content' ? props.theme.black: props.theme.white};
    font-family: ${props => props.theme.textFont};

    &:hover {
      color: #2E9FB8; 
    }
  }
`;
