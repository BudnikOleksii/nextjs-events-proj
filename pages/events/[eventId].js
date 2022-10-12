import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/error-alert/error-alert';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';

const EventDetailPage = (props) => {
  const { currentEvent } = props;

  if (!currentEvent) {
    return <ErrorAlert>No event found</ErrorAlert>;
  }

  const { title, date, location, image, description } = currentEvent;

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

export const getStaticProps = async (context) => {
  const { eventId } = context.params;
  const currentEvent = await getEventById(eventId);

  return {
    props: {
      currentEvent,
    },
    revalidate: 30,
  };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: true,
  };
};

export default EventDetailPage;
