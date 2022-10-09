import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import { EventsList } from '../../components/EventsList';
import ResultsTitle from '../../components/results-title/results-title';
import ErrorAlert from '../../components/error-alert/error-alert';

const FilteredEventsPage = () => {
  const router = useRouter();

  const { slug } = router.query;

  if (!slug) {
    return <p className="center">Loading</p>;
  }

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
    return <ErrorAlert>Invalid filter/ Please, adjust your values</ErrorAlert>;
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });
  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <div>
      {(!filteredEvents || !filteredEvents.length) && (
        <ErrorAlert>No Events for this period</ErrorAlert>
      )}

      {filteredEvents.length > 0 && (
        <>
          <ResultsTitle date={date} />
          <EventsList events={filteredEvents} />
        </>
      )}
    </div>
  );
};

export default FilteredEventsPage;
