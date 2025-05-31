import { Container } from './componets/Container';
import { Logo } from './componets/Logo';
import { Menu } from './componets/Menu';

import './styles/theme.css';
import './styles/global.css';
import { CountDown } from './componets/CountDown';

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>
    </>
  );
}
