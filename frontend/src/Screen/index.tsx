import { routes as Calendar } from './Calendar';
import { reducer as LoginReducer, routes as Login } from './Login';

export const routes: RouteType[] = [Calendar, Login];
export const reducers = { LoginReducer };
