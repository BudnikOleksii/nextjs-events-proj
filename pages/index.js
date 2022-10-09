import { getFeaturedEvents } from '../dummy-data';
import { EventsList } from '../components/EventsList';

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default HomePage;
