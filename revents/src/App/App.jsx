import React, { useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../features/events/eventDashboard/eventDashboard";
import NavBar from "../features/Nav/NavBar";
import "./style.css";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  return (
    <>
      <NavBar setFormOpen={setFormOpen} />
      <Container className="main">
        <EventDashboard formOpen={formOpen} setFormOpen={setFormOpen} />
      </Container>
    </>
  );
}

export default App;
