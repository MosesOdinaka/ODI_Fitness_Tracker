import { ThemeProvider, styled } from 'styled-components';
import {lightTheme} from './utils/Themes';
import { BrowserRouter } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary}
  overflow-x: hidden;
  overflow-y: hidden;
  transition: all 0.2s ease;
`;

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <container>Hi</container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
