import * as React from 'react';
import {
  Avatar,
  Button,
  createStyles,
  CssBaseline,
  Paper,
  TextField,
  Theme,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core';

import { Lock } from '@material-ui/icons';

interface IProps extends WithStyles<typeof styles> {

}

export const Login = ({ classes }: IProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = setState => e => setState(e.target.value);

  return (
    <main className={classes.main}>
      <CssBaseline/>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Lock/>
        </Avatar>
        <Typography component="h1" variant="h5">

          Пароль
        </Typography>
        <form className={classes.form}>
          <TextField
            id="standard-name"
            label="Пошта"
            className={classes.textField}
            value={email}
            onChange={handleChange(setEmail)}
            margin="normal"
          />
          <TextField
            id="standard-name"
            label="Пароль"
            className={classes.textField}
            value={password}
            onChange={handleChange(setPassword)}
            margin="normal"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Увійти
          </Button>
        </form>
      </Paper>
    </main>
  );
};

const styles = (theme: Theme) => createStyles({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

export const routes: RouteType = { path: '/login', component: withStyles(styles)(Login) };
