import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// tslint:disable import-name
import BigCalendar from 'react-big-calendar';
import * as moment from 'moment';
import localizer from 'react-big-calendar/lib/localizers/moment';
import 'react-big-calendar/lib/less/styles.less'
import events from '../../../demoData/events';
import { actions } from './Reducer';

require('moment/locale/uk');

const globalizeLocalizer = localizer(moment);

interface IProps {
  match: any;
}

interface IState {

}

export class Calendar extends React.Component<IProps, IState> {
  render() {
    console.log(this.props);

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

export const routes: RouteType = {
  path: '/calendar',
  component: connect(
    state => ({
      state
    }),
    dispatch => ({
      actions: bindActionCreators(actions, dispatch)
    }),
  )(Calendar)
};
