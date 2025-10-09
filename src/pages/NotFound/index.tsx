import { Container } from '../../componets/Container';
import { MainTemplate } from '../../templates/MainTemplate';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
          similique, amet facere dolorem adipisci corrupti consectetur nobis
          ipsam est sed labore velit natus sapiente cum consequatur facilis
          itaque voluptatum dolorum.
        </p>
      </Container>
    </MainTemplate>
  );
}
