import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventForm from "../EventForm/EventForm";
import EventList from "./EventList";
import { sampleData } from "../../../App/api/sampleData";

export default function EventDashboard({ formOpen, setFormOpen }) {
  const [events, setEvents] = useState(sampleData);
  return (
    <Grid>
      <Grid.Column width="10">
        <EventList events={events} />
        <h2>Left Column</h2>
      </Grid.Column>
      <Grid.Column width="6">
        {formOpen && <EventForm setFormOpen={setFormOpen} />}
      </Grid.Column>
    </Grid>
  );
}
