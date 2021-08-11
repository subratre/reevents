import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../features/events/eventDashboard/eventDashboard";
import NavBar from "../features/Nav/NavBar";
import "./style.css";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };

  const handleCreateFormOpen = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  };
  return (
    <>
      <NavBar setFormOpen={handleCreateFormOpen} />
      <Container className="main">
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectEvent={handleCreateFormOpen}
          selectedEvent={selectedEvent}
        />
      </Container>
    </>
  );
}

export default App;
