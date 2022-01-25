import { createTheme } from "@mui/material";
import { grey,blue,pink } from "@mui/material/colors";

const primaryColor = grey[900];

const theme = createTheme({
    
        palette: {
            primary: {
                light: '#757ce8',
                main: '#3f50b5',
                dark: '#002884',
                contrastText: '#fff',
              },
              secondary: {
                light: '#ff7961',
                main: 'red',
                dark: '#ba000d',
                contrastText: '#000',
              },

        },

        components:{
            MuiButton: {
                styleOverrides: {
                  // Name of the slot
                  root: {
                   backgroundColor: 'red',
                  },
                },
              },
        }
      
 

});

export default theme;



