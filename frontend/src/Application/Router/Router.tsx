import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Layout } from 'Module/Layout';

import { routes } from 'Screen';

interface IProps {
}

export const Router: React.FunctionComponent<IProps> = () => {
  return (
    <BrowserRouter forceRefresh={false}>
      <Layout>
        <Switch>
          {routes.map(props => {
            return <Route {...props} key={props.path}/>;
          })}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
