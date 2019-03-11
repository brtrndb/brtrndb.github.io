import styled from 'styled-components';
import { createMuiTheme } from '@material-ui/core/styles';

const DefaultContainer = styled.div``;

const appMuiTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});

export { appMuiTheme };
export default DefaultContainer;
