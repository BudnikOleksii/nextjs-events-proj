import { EventItem } from '../EventItem';
import classes from './EventsList.module.css';

export const EventsList = (props) => {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((eventName) => (
        <EventItem key={eventName.id} eventName={eventName} />
      ))}
    </ul>
  );
};
