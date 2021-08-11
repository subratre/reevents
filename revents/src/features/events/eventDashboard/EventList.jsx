import React from "react";
import EventListItem from "./EventListItem";

const EventList = ({
  events,
  selectEvent,
  selectedEvent,
  handleDeleteEvent,
}) => {
  return (
    <>
      {events.map((event, index) => (
        <EventListItem
          event={event}
          key={event.id}
          selectEvent={selectEvent}
          handleDeleteEvent={handleDeleteEvent}
        />
      ))}
    </>
  );
};

export default EventList;
