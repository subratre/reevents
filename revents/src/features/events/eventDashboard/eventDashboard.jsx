import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../App/api/sampleData";

export default function EventDashboard({
  formOpen,
  setFormOpen,
  selectEvent,
  selectedEvent,
}) {
  const [events, setEvents] = useState(sampleData);

  // const handlEvents = (event) => {
  //   setEvents([...events, event]);
  // };

  // function handleUpdateEvent(updatedEvent) {
  //   setEvents(
  //     events.map((evt) => (evt.id === updatedEvent.id ? updatedEvent : evt))
  //   );
  //   selectEvent(null);
  //   setFormOpen(false);
  // }

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter((evt) => evt.id !== eventId));
  };

  return (
    <Grid>
      <Grid.Column width="10">
        <EventList events={events} handleDeleteEvent={handleDeleteEvent} />
        <h2>Left Column</h2>
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
