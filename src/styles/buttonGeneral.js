import styled, { css }  from 'styled-components';

export const Button = styled.button`
  height: 38px;
  padding: 0 40px;
  border: none;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;

  ${props => props.primary && css`
    color: ${props => props.theme.white};
    background: ${props => props.theme.primary};
    margin: 30px 0 0 0;

    &:hover {
      background: #2E9FB8;
    }
  `}

  ${props => props.secondary && css`
    color: ${props => props.theme.primary};
    background: transparent;
    border: 1px solid ${props => props.theme.primary};
    margin: 30px 0 0 0;

    &:hover {
      color: #2E9FB8;
      border: 1px solid #2E9FB8;
    }
  `}
`;
