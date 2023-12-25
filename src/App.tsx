import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/theme/global';
import { Router } from './Router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
