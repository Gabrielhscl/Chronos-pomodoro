import { Container } from './componets/Container';
import { Logo } from './componets/Logo';
import { Menu } from './componets/Menu';
import { CountDown } from './componets/CountDown';
import { DefaultInput } from './componets/DefaultInput';

import './styles/theme.css';
import './styles/global.css';
import { Cycles } from './componets/Cycles';

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
      <Container>
        <form className='form' action='#'>
          <div className='formRow'>
            <DefaultInput
              id='meuInput'
              labelText='Task'
              type='text'
              placeholder='Digite Algo'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles />
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}
