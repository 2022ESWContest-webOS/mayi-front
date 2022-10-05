import './EventList.css';

const EventList = ({ events }) => {
  return (
    <table className="event-table">
      <th>순번</th>
      <th>시간</th>
      <th>위치</th>
      <th>유형</th>
      {events.map(({ id, time, location, type }) => (
        <tr>
          <td>{id}</td>
          <td>{time}</td>
          <td>{location}</td>
          <td>{type}</td>
        </tr>
      ))}
    </table>
  );
};

export default EventList;
