import React, { useState } from 'react';
import { ListItem } from '../../components/ListItem';

import { Container, Header, HeaderTitle, Title, Stickers } from './styles';

export function Products() {
  const [formValues, setFormValues] = useState({})
  const [quantity, setQuantity] = useState(0)
  const [react, setReact] = useState(false)
  const [vue, setVue] = useState(false)
  const [angular, setAngular] = useState(false)
  const [remark, setRemark] = useState("")

  const stickers = ['React', 'Vue', 'Angular'];

  const handleCheckboxChange = (e: {target: { name: string; checked: boolean }}) => {
    const {name, checked} = e.target;

    if (name === 'react') {
      setReact(checked);
    } else if (name === 'vue') {
      setVue(checked);
    } else {
      setAngular(checked);
    }
  }

  const handleDecreaseCounter = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleIncreaseCounter = () => {
    setQuantity(quantity + 1)
  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setFormValues({
      react,
      vue,
      angular,
      quantity,
      remark
    })
  } 

  return (
    <Container>
      <Header>
        <HeaderTitle>Formulário{'\n'}para compra de{'\n'}<strong>Pacote de adesivos</strong></HeaderTitle>
      </Header>

      <form onSubmit={handleSubmit}>
        <Title>Quais Adesivos:</Title>
        <ListItem data={stickers} onChange={handleCheckboxChange} />

        <Title>Quantos adesivos de cada?</Title>
        <div>
          <button onClick={handleDecreaseCounter}>-</button>
            <span id='counter'>{quantity}</span>
          <button onClick={handleIncreaseCounter}>+</button>
        </div>

        <Title>Observações:</Title>
        <textarea name="remarks" onChange={e => setRemark(e.target.value)}></textarea>

        <button type="submit">Enviar</button>
      </form>
    </ Container>
  );
}