import { useState } from 'react';
import * as S from './styled'
import axios from 'axios';
import { useHistory } from "react-router-dom"

function Home() {
  const history = useHistory();
  const [usuario, setUsuario] = useState('')
  const [ erro, setErro] = useState (false)

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data
        const repositoriesName = []
        repositories.forEach((repository) => {
          repositoriesName.push(repository.name)
        })
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))
        history.push('/repositories')
      })
      .catch(erro => {
        setErro(true)
      });

  }

  return (
    <S.HomeContainer>
      <S.Content>
        <S.Input placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type='button' onClick={handlePesquisa}>Pesquisar</S.Button>
      </S.Content>
      <S.ErrorMsg>{ erro ? 'Ocorreu um erro. Tente novamente' : ''}</S.ErrorMsg>
    </S.HomeContainer>
  )
}

export default Home