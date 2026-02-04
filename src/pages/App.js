import { useState } from "react";

import gitLogo from "../assets/images/github.png";
import { Container } from "./styles";

import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import api from "../services/api";

function App() {
  // repos/GustavoSantosRodrigues/Wiki-de-Reposit-rios-do-GitHub-Com-React

  const [currentRepo, setCurrentRepo] = useState('GustavoSantosRodrigues/Wiki-de-Reposit-rios-do-GitHub-Com-React');
  const [repos, setRepos] = useState([]);
  const handleSearch = async () => {
    try {
      const response = await api.get(`repos/${currentRepo}`);

      const repoExists = repos.some(
        repo => repo.id === response.data.id
      );

      if (repoExists) {
        alert('Repositório já existe');
        return;
      }

      setRepos(prev => [...prev, response.data]);
      setCurrentRepo('');

    } catch (error) {
      alert('Repositório não encontrado');
    }
  };


  const handleRemove = (id) => {
    setRepos(prev => prev.filter(repo => repo.id !== id));
  };

  return (
    <Container>
      <img src={gitLogo} alt="GitHub" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearch} />
      {/* <ItemRepo name="Gustavo Santos Rodrigues" /> */}
      {repos.map(repo => (
        <ItemRepo repo={repo} handleRemove={handleRemove} />
      ))}
    </Container>
  );
}

export default App;
