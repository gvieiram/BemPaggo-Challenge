import React, { InputHTMLAttributes } from 'react';
import { Container } from './styles';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  data: string[],
  name?: string,
}

export function ListItem({data, name, ...rest} : CheckboxProps) {
  return (
    <Container>
      {
        data.map((item, index) => {
          return (
            <label key={index}>
              <input type="checkbox" name={name || item.toLowerCase()} value={item} {...rest}/>
              {item}
            </label>
          )
        })
      }
    </Container>
  );
}