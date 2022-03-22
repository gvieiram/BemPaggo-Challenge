import styled from 'styled-components';

import wave from '../../assets/wave.svg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form {
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

  @media (max-width: 1400px) {
    padding: 0 100px;
    }
  
  p { 
    white-space: pre-line;
    font-size: 3.75rem;
    color: ${props => props.theme.colors.white};
    margin-top: 5%;

    @media (max-width:812px) {
      font-size: 3.5rem;
    }

    @media (max-width:598px) {
      font-size: 3rem;
    }
  }

  .iconBox {
    font-size: 25rem;
    color: ${props => props.theme.colors.blue_secondary};

    @media (min-width: 1401px) {
      font-size: 21rem;
    }

    @media (max-width: 1400px) {
      font-size: 21rem;
    }
  }
`;

export const Content = styled.div`
  padding: 0 100px;
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
    width: 80px;

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
  min-width: 300px;
  height: 200px;
  padding: 15px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.blue_primary};
  font-size: 1.1rem;

  margin-bottom: 50px;
`;
