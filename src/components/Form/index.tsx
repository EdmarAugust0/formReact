import {
  Button,
  Escolha,
  FormContent,
  InputName,
  Select,
  Tamanhos
} from './styles'

const Form = () => {
  return (
    <FormContent className="containerForm">
      <h1>Formulário</h1>
      <InputName type="text" placeholder="Nome" />
      <Select name="genero" id="genero">
        <option value="masculino">Masculino</option>
        <option value="feminino">Feminino</option>
      </Select>
      <Tamanhos>
        <h5>Tamanho da blusa:</h5>
        <label htmlFor="tamanhoP">P</label>
        <input type="radio" name="tamanho" id="tamanhoP" />

        <label htmlFor="tamanhoM">M</label>
        <input type="radio" name="tamanho" id="tamanhoM" />

        <label htmlFor="tamanhog">G</label>
        <input type="radio" name="tamanho" id="tamanhog" />
      </Tamanhos>
      <Escolha>
        <h5>Quem devo atropelar?</h5>
        <label htmlFor="decisao1">Velhinha</label>
        <input type="checkbox" id="decisao1" />

        <label htmlFor="decisao2">Criancinha</label>
        <input type="checkbox" id="decisao2" />
      </Escolha>
      <Button type="submit">Send</Button>
    </FormContent>
  )
}

export default Form
