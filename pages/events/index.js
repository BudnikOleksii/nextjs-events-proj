import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import { EventsList } from '../../components/EventsList';
import { EventsSearch } from '../../components/EventsSearch';

const AllEventsPage = () => {
  const events = getAllEvents();
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

export default AllEventsPage;
