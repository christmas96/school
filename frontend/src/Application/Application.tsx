import * as React from 'react';

import { Router } from 'Application/Router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';

export const Application: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <Router/>
    </MuiThemeProvider>
  )
};
