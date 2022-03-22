import React, { InputHTMLAttributes } from 'react';
import { Container, Checkbox } from './styles';

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
            <Checkbox key={index}>
              <input type="checkbox" name={name || item.toLowerCase()} value={item} {...rest}/>
              {item}
            </Checkbox>
          )
        })
      }
    </Container>
  );
}