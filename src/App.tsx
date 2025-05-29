import './styles/theme.css';
import './styles/global.css';
import { Container } from './componets/Container';
import { Heading } from './componets/Heading';

export function App() {
  return (
    <>
      <Container>
        <Heading>LOGO</Heading>
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
