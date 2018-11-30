import * as React from 'react';
// tslint:disable import-name
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import localizer from 'react-big-calendar/lib/localizers/moment';
import 'react-big-calendar/lib/less/styles.less'
import events from '../../../demoData/events';

require('moment/locale/uk');

const globalizeLocalizer = localizer(moment);

interface IProps {

}

interface IState {

}

export class Calendar extends React.Component<IProps, IState> {
  render() {
    return (
      <div className={'example'}>
        <BigCalendar
          onSelectEvent={console.log}
          defaultView={'week'}
          views={['week', 'day']}
          events={events}
          localizer={globalizeLocalizer}/>
      </div>
    )
  }
}

export const routes: RouteType = { path: '/calendar', component: Calendar };
