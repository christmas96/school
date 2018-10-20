import * as React from "react";
// tslint:disable import-name
import BigCalendar from 'react-big-calendar';
import localizer from 'react-big-calendar/lib/localizers/moment';
import 'react-big-calendar/lib/less/styles.less'
import * as moment from 'moment';
require('moment/locale/uk');
import events from '../../demoData/events';

const globalizeLocalizer = localizer(moment);

interface IProps {
  culture: string;
}

interface IState {

}

export class Calendar extends React.Component<IProps, IState> {
  render() {
    const {culture} = this.props;

    return (
    <div className={'example'}>
      <BigCalendar
        culture={culture}
        events={events}
        defaultDate={new Date()}
        localizer={globalizeLocalizer}/>
    </div>
    )
  }
}
