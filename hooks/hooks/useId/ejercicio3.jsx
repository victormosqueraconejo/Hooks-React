import { createRoot } from 'react-dom/client';
import ContrasenaUseId from './ejercicio1';

const root1 = createRoot(document.getElementById('root1'), {
  identifierPrefix: 'my-first-app-'
});
root1.render(<ContrasenaUseId />);

const root2 = createRoot(document.getElementById('root2'), {
  identifierPrefix: 'my-second-app-'
});
root2.render(<ContrasenaUseId />);



