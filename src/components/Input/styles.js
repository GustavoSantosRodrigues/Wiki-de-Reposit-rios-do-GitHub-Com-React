import styled from "styled-components";

export const InputContainer = styled.div`
  border: 1px solid #fafafa;
  border-radius: 20px;
    
  height:62px;
  width: 80%;
  margin: 20px;

  input {
      background-color: transparent;
      border: none;
      color: #000;
      width: 100%;
      height: 100%;
      padding: 0px 10px;
  }

  input::placeholder {
      color: #000;
  }

  input:focus {
      outline: none;
  } 
`;
// https://api.github.com/repos/GustavoSantosRodrigues/Wiki-de-Reposit-rios-do-GitHub-Com-React