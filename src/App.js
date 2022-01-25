import { ThemeProvider } from '@mui/styles';
import './App.css';
import Home from './Pages/Home/Home';
import theme from './theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
