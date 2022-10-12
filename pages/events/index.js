import { useRouter } from 'next/router';
import { EventsList } from '../../components/EventsList';
import { EventsSearch } from '../../components/EventsSearch';
import { getAllEvents } from '../../helpers/api-util';

const AllEventsPage = (props) => {
  const { events } = props;
  const router = useRouter();

  const handleFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={handleFindEvents} />
      <EventsList events={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};

export default AllEventsPage;
