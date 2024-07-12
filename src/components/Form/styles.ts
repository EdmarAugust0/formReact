import styled from 'styled-components'
import { colors } from '../../styles'

export const FormContent = styled.div`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  padding: 16px;
  border: 1px solid ${colors.gray};
  border-radius: 8px;

  h1 {
    text-align: center;
  }
`

export const InputName = styled.input`
  margin: 8px 0;
  padding: 8px;
`

export const Select = styled.select`
  padding: 8px;
  margin-bottom: 8px;
`

export const Tamanhos = styled.div`
  input {
    margin: 0 16px 0 6px;
  }
`

export const Escolha = styled.div`
  margin: 8px 0;

  input {
    margin: 0 16px 0 6px;
  }
`
export const Button = styled.button`
  padding: 8px;
  width: 50%;
  margin: 0 auto;
`
