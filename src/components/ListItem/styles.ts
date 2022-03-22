import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Checkbox = styled.label`
  margin: 5px 0;
  max-width: 150px;
  cursor: pointer;

  input[type="checkbox"] {
    margin-right: 5px;
  }
`;

