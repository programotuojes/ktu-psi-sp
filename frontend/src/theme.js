import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import yellow from '@material-ui/core/colors/yellow';
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: yellow,
  },
  overrides: {
    MuiButton: {
      text: {
        'text-transform': 'none',
      },
    },
  },
});

export default theme;
