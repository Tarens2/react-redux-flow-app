// @flow
import React from 'react';
import { ListItemText } from 'material-ui';

const formatWord = (min, titles) => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[min % 100 > 4 && min % 100 < 20 ? 2 : cases[min % 10 < 5 ? min % 10 : 5]];
};

const formatTime = (time: number) => {
  const timeNow = Date.now();
  const minDiff = (timeNow - time) / 60000;

  const timeDate = new Date(time);

  let month = timeDate.getMonth();
  let days = timeDate.getDate();
  let hours = new Date(time).getHours();
  let mins = new Date(time).getMinutes();

  month = month < 10 ? `0${month}` : month;
  days = days < 10 ? `0${days}` : days;
  hours = hours < 10 ? `0${hours}` : hours;
  mins = mins < 10 ? `0${mins}` : mins;

  if (minDiff < 1) {
    return 'Сейчас';
  } else if (minDiff < 2) {
    return 'минуту назад';
  } else if (minDiff < 60) {
    const minRound = Math.round(minDiff);
    return `${minRound} ${formatWord(minRound, ['минуту', 'минуты', 'минут'])} назад`;
  } else if (new Date(timeNow).getDate() - new Date(time).getDate() === 0) {
    return `сегодня в ${hours}:${mins}`;
  } else if (new Date(timeNow).getDate() - new Date(time).getDate() === 1) {
    return `вчера в ${hours}:${mins}`;
  }
  return `${days}.${month}.${timeDate.getFullYear()} в ${timeDate.getHours()}:${timeDate.getMinutes()}`;
};

type Props = { time: number, name: string };
type State = {
  time: number,
  name: string,
  formatedTime: string,
  intervalId: IntervalID | number,
};
class DateFormater extends React.Component<Props, State> {
  state = {
    time: this.props.time,
    name: this.props.name,
    formatedTime: '',
    intervalId: 0,
  };

  componentDidMount = () => {
    this.setFormatTimer();
  };

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };

  setFormatTimer = () => {
    this.setState({ formatedTime: formatTime(this.state.time) });
    const intervalId = setInterval(() => {
      this.setState({ formatedTime: formatTime(this.state.time) });
    }, 60000);
    this.setState({ intervalId });
  };

  render() {
    return <ListItemText secondary={this.state.formatedTime} primary={this.state.name} />;
  }
}

export default DateFormater;
