import { hydrate as ReactDOMHydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

ReactDOMHydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
