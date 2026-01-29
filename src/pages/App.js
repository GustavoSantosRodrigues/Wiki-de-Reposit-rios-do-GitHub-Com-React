import gitLogo from "../assets/images/github.png";
import { Container } from "./styles";
function App() {
  return (
    <Container>
      <img src={gitLogo} alt="GitHub" width={72} height={72} />
    </Container>
  );
}

export default App;
