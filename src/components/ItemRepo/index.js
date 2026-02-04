import react from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemove }) {
  return (
    <ItemContainer>
      <h3 className="owner"> nome do dono: <span style={{ color: "white" }}>{repo.owner.login}</span></h3>
      <h3 className="name"> nome do repositorio: <span style={{ color: "white" }}>{repo.name}</span></h3>

      <div className="actions">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="view"
        >
          Ver repositório
        </a>

        <button
          className="remove"
          onClick={() => handleRemove(repo.id)}
        >
          Remover
        </button>
      </div>
    </ItemContainer>
  );
}


export default ItemRepo;
