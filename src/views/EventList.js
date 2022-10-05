import EventList from '../components/EventList';
import PageLayout from '../components/PageLayout';

const events = [
  { id: 1, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 2, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 3, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 4, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 5, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 6, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 7, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 8, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 9, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 10, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 11, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 12, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 13, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
  { id: 14, time: '2022.07.10 10:00', location: '햇님반', type: '넘어짐' },
];

const EventListPage = () => {
  return (
    <PageLayout>
      <EventList events={events} />
    </PageLayout>
  );
};

export default EventListPage;
