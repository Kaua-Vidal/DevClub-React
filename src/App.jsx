import { Title, Container, TopBackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles'

function Home() {

  return (
    <Container>
      <TopBackground>
        <img src="" alt="" />
      </TopBackground>

      <Form form action="">
        <Title>ok react</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuário' />
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' />
            </div>
          </div>

          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type='email' placeholder='E-mail do usuário' />
          </div>
        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>
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