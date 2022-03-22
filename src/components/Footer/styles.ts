import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10%;
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  height: 100px;

  button { 
    height: 30px;
    width: 100px;
    background-color: ${props => props.theme.colors.blue_primary};
    color: ${props => props.theme.colors.white};
    font-weight: 500;
    border: none;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
      background-color: ${props => props.theme.colors.blue_secondary};
    }
  }
`;
