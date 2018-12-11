import * as React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'Application/Router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { store } from './Store';

export const Application: React.FunctionComponent = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={createMuiTheme()}>
        <Router/>
      </MuiThemeProvider>
    </Provider>
  )
};
