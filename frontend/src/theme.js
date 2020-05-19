import { createMuiTheme } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: yellow,
  },
  overrides: {
    MuiSnackbarContent: {
      root: {
        minWidth: 0,
        flexGrow: 'unset',
        '@media (min-width: 600px)': {
          minWidth: 0,
        },
      },
    },
  },
});

export default theme;
