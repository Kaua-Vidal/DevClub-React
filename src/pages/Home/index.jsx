import api from '../../services/api'
import { useRef } from 'react'
import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles'
import UsersImage from '../../assets/users.png'

function Home() {

  const inputName  = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser() {
    await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })

  }

  return (
    <Container>
      <TopBackground>
        <img src={UsersImage} alt="imagem-usuarios" />
      </TopBackground>

      <Form form action="">
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome<span> *</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade<span> *</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
            </div>

          
        </ContainerInputs>

        <div style={{width: '100%'}}>
            <InputLabel>
              E-mail<span> *</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
          </div>
        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Container>
  )
}

export default Home

/*
  Exportar "padrão" -> Uma coisa só por página
  Apenas Exportar -> Export antes do nome da função
*/

/**
 * No Return é o HTML e precisa sempre ter um elemento
 * para ser o pai de tudo, ou seja, envolve todos. Não pode ter
 * duas divs separadas.
 */


/**
 * Posso criar JAVASCRIPT fora do return e colocar dentro do return
 */