import { createMuiTheme} from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";

export default createMuiTheme({
  palette: {
    primary: blue
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: 300
    }
  }
})
