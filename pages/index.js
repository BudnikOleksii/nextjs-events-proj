import { EventsList } from '../components/EventsList';
import { getFeaturedEvents } from '../helpers/api-util';

const HomePage = (props) => {
  const { featuredEvents } = props;

  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
