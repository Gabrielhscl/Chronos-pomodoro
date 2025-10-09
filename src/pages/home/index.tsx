import { Container } from '../../componets/Container';
import { CountDown } from '../../componets/CountDown';
import { MainForm } from '../../componets/MainForm';
import { MainTemplate } from '../../templates/MainTemplate';

export function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
