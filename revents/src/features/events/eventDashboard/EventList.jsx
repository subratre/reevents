import React from "react";
import EventListItem from "./EventListItem";

const EventList = (props) => {
  return (
    <>
      {props.events.map((event, index) => (
        <EventListItem event={event} key={event.id} />
      ))}
    </>
  );
};

export default EventList;
