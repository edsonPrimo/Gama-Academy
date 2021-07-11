import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './styled'


function Repositories() {
  const [repositories, setRepositories] = useState([])
  const history = useHistory()
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');
    if (repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      history.push('/')
    }

  }, []);
  return (
    <S.Container>
      <S.Title>Reposítorios</S.Title>
      <S.List>
        {repositories.map((repository, id) => {
          return (
            <S.ListItem key={id}>{repository}</S.ListItem>
          )
        })}
      </S.List>
      <S.LinkHome to='/' >Voltar</S.LinkHome>
    </S.Container>

  )
}
export default Repositories