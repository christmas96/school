import { reducer as CalendarReducer, routes as Calendar } from './Calendar';
import { reducer as LoginReducer, routes as Login } from './Login';

export const reducers = { LoginReducer, CalendarReducer };
export const routes: RouteType[] = [Calendar, Login];

