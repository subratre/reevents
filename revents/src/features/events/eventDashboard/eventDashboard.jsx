import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "./EventList";

export default function EventDashboard() {
  const { events } = useSelector((state) => state.events);

  return (
    <Grid>
      <Grid.Column width="10">
        <EventList events={events} />
        <h2>Left Column</h2>
      </Grid.Column>
      <Grid.Column width="6">
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
}
