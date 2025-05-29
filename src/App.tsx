import './styles/theme.css';
import './styles/global.css';
import { Heading } from './componets/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <div>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius expedita
        explicabo quidem impedit eum ipsum in illum, debitis officia porro magni
        amet cumque molestiae, esse suscipit eligendi harum nisi minima.s
      </p>
    </div>
  );
}
