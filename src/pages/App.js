import gitLogo from "../assets/images/github.png";
import { Container } from "./styles";

import Input from "../components/Input";
function App() {
  return (
    <Container>
      <img src={gitLogo} alt="GitHub" width={72} height={72} />
      <Input />
    </Container>
  );
}

export default App;
