import styled from 'styled-components';

import wave from '../../assets/wave.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
    padding: 0 150px 0 100px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
  }
`;

export const Header = styled.div`
  background-image: url(${wave});
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 500px;
  padding: 0 150px 0 100px;
  
  p { 
    white-space: pre-line;
    font-size: 60px;
    color: ${props => props.theme.colors.white};
    margin-top: 5%;
  }

  .iconBox {
    font-size: 25rem;
    color: ${props => props.theme.colors.blue_secondary};
  }
`;

export const Title = styled.h3`
  margin: 15px 0;
  font-size: 24px;
`;

export const Stickers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  max-width: 120px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: ${props => props.theme.colors.blue_primary};

    border: none;
    border-radius: 5px;
  }

  input[type="number"] {
    height: 25px;
    margin: 0 10px;
    background-color: ${props => props.theme.colors.gray};
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid ${props => props.theme.colors.blue_primary};
    padding: 0 5px;
  }
`;

export const Remarks = styled.textarea`
  width: 50%;
  height: 200px;
  padding: 15px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.blue_primary};
  font-size: 1.1rem;

  margin-bottom: 50px;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10%;
  /* position: absolute; */
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.colors.gray};
  height: 100px;
`;




