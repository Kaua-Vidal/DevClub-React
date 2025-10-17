import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import UsersImage from '../../assets/users.png'
import { func } from 'prop-types'
import Trash from '../../assets/trash.svg'
import { CardUsers, Container, ContainerUsers, TrashIcon, Title, AvatarUser } from './styles'

function ListUsers() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    //TODA VEZ que a tela carrega, o useEffect é chamado
    //TODA VEZ que uma determinada variavel MUDA de valor, ele é chamado

    async function deleteUsers(id) {
        await api.delete(`usuarios/${id}`)

    const updatedUsers = users.filter(user => user.id !== id)
    
    setUsers(updatedUsers)
    }


    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>

            <ContainerUsers>

                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`}/>
                        <div >
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt='Lixo-img' onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>

            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>

        </Container>
    )
}

export default ListUsers