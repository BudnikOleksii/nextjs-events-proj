import classes from './EventItem.module.css';
import { Button } from '../Button';
import { DateIcon } from '../icons/date-icon';
import { AddressIcon } from '../icons/address-icon';
import { ArrowRightIcon } from '../icons/arrow-right-icon';

export const EventItem = (props) => {
  const { eventName } = props;
  const { title, image, date, location, id } = eventName;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt={title} />

      <div className={classes.content}>
        <div>
          <h2>{title}</h2>
        </div>

        <div className={classes.date}>
          <DateIcon />
          <time>{humanReadableDate}</time>
        </div>

        <div className={classes.address}>
          <AddressIcon />
          <address>{formattedAddress}</address>
        </div>

        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
