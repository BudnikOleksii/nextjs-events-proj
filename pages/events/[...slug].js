import { getFilteredEvents } from '../../helpers/api-util';
import { EventsList } from '../../components/EventsList';
import ResultsTitle from '../../components/results-title/results-title';
import ErrorAlert from '../../components/error-alert/error-alert';

const FilteredEventsPage = (props) => {
  if (props.hasError) {
    return <ErrorAlert>Invalid filter. Please, adjust your values</ErrorAlert>;
  }

  const { filteredEvents, date } = props;
  const correctDate = new Date(date.filteredYear, date.filteredMonth - 1);

  return (
    <div>
      {(!filteredEvents || !filteredEvents.length) && (
        <ErrorAlert>No Events for this period</ErrorAlert>
      )}

      {filteredEvents.length > 0 && (
        <>
          <ResultsTitle date={correctDate} />
          <EventsList events={filteredEvents} />
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { slug } = params;

  const filteredYear = Number(slug[0]);
  const filteredMonth = Number(slug[1]);

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredYear < 2021 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return {
      props: { hasError: true },
      // notFound: true,
      // redirect: {
      //   destination: '/error',
      // },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  return {
    props: {
      filteredEvents,
      date: {
        filteredYear,
        filteredMonth,
      },
    },
  };
};

export default FilteredEventsPage;
