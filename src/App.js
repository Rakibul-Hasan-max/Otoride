import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/styles';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Navbar';
import theme from './theme'


function App() {
  return (
    
    <>
    <ThemeProvider theme={theme}>
    {/* <Navbar/> */}
     <Home />
     </ThemeProvider>
    </>
  );
}

export default App;
