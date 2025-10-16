import { useEffect, useState } from 'react'
import api from '../../services/api'
import Button from '../../components/Button'
import TopBackground from '../../components/TopBackground'
import UsersImage from '../../assets/users.png'
import { func } from 'prop-types'

function ListUsers() {

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


    return (


        <div>
            <TopBackground/>
            <h1>Listagem de Usuários</h1>

            {users.map( user => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.age}</p>
                    <p>{user.email}</p>
                </div>
            ))}
            <Button>Voltar</Button>

        </div>
    )
}

export default ListUsers