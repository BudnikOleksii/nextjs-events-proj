import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { EventItem } from '../../components/EventItem';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/error-alert/error-alert';

const EventDetailPage = () => {
  const router = useRouter();

  const { eventId } = router.query;
  const currentEvent = getEventById(eventId);
  const { title, date, location, image, description } = currentEvent;

  if (!currentEvent) {
    return <ErrorAlert>No event found</ErrorAlert>;
  }

  return (
    <>
      <EventSummary title={title} />
      <EventLogistics
        date={date}
        address={location}
        image={image}
        imageAlt={title}
      />
      <EventContent>
        <p>{description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
