import { Container } from '../../componets/Container';
import { Footer } from '../../componets/Footer';
import { Logo } from '../../componets/Logo';
import { Menu } from '../../componets/Menu';

type MainTemplateProps = {
  children: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
