import { Container } from './componets/Container';
import { Heading } from './componets/Heading';
import { Logo } from './componets/Logo';

import './styles/theme.css';
import './styles/global.css';
export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}
