import React, { useState } from 'react';
import { ListItem } from '../../components/ListItem';
import { FiBox, FiMinus, FiPlus } from "react-icons/fi";
import { Footer } from '../../components/Footer';

import { Container, Header, Title, Counter, Remarks, Content } from './styles';

interface FormProps {
  react: boolean;
  vue: boolean;
  angular: boolean;
  quantity: number;
  remark: string;
}

export function Products() {
  const [formValues, setFormValues] = useState<FormProps>({
    react: false,
    vue: false,
    angular: false,
    quantity: 0,
    remark: "",
  })

  const stickers = ['React', 'Vue', 'Angular'];

  const handleCheckboxChange = (e: {target: { name: string; checked: boolean }}) => {
    const {name, checked} = e.target;

    if (name === 'react') {
      setFormValues(prevState => ({  
        ...prevState,
        react: checked
      }))
    } else if (name === 'vue') {
      setFormValues(prevState => ({  
        ...prevState,
        vue: checked
      }))
    } else {
      setFormValues(prevState => ({  
        ...prevState,
        angular: checked
      }))
    }
  }

  const handleInputChange = (value: string) => {
    setFormValues(prevState => ({
      ...prevState,
      quantity: Number(value) 
    }))

    console.log({quantity: value});
    
  }

  const handleDecreaseCounter = () => {
    if (formValues.quantity > 0) {
      setFormValues(prevState => ({  
        ...prevState,
        quantity: prevState.quantity - 1
      }))
    }
  }

  const handleIncreaseCounter = () => {
    setFormValues(prevState => ({  
      ...prevState,
      quantity: prevState.quantity + 1
    }))
  }

  const handleRemarks = (value: string) => {
    setFormValues(prevState => ({
      ...prevState,
      remark: value
    }))
  }

  const handleSubmit = (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    
    if (!formValues.react && !formValues.vue && !formValues.angular){
      return alert('Selecione um adesivo!')
    }

    if (formValues.quantity === 0) {
      return alert('Selecione a quantidade!')
    }

    alert('*** handleSubmit\n' + JSON.stringify(formValues));
    e.target.reset();
    setFormValues({
      react: false,
      vue: false,
      angular: false,
      quantity: 0,
      remark: "",
    });
  }

  return (
    <Container>
        <Header>
          <p>Formulário{'\n'}para compra de{'\n'}<strong>Pacote de adesivos</strong></p>
          <FiBox className='iconBox'/>
        </Header>

        <form onSubmit={handleSubmit}>
          <Content>
            <Title>Quais Adesivos:</Title>
            <ListItem data={stickers} onChange={handleCheckboxChange} />

            <Title>Quantos adesivos de cada?</Title>
            <Counter>
              <button type="button" onClick={handleDecreaseCounter}>
                <FiMinus color='white' size={18}/>
              </button>
                <input 
                  type="number" 
                  value={formValues.quantity} 
                  onChange={e => handleInputChange(e.target.value)}
                  min={0}
                />
              <button type="button" onClick={handleIncreaseCounter}>
                <FiPlus color='white' size={18}/>
              </button>
            </Counter>

            <Title>Observações:</Title>
            <Remarks name="remarks" onChange={e => handleRemarks(e.target.value)} placeholder='Alguma dúvida? Recado?'></Remarks>
          </Content>

          <Footer buttonType='submit' buttonText='Enviar' />
        </form>
    </ Container>
  );
}