import { createEvent } from "@testing-library/react";
import React from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDetailed from "../features/EventDetails/EventDetailed";
import EventDashboard from "../features/events/eventDashboard/eventDashboard";
import EventForm from "../features/events/EventForm/EventForm";
import HomePage from "../features/Home/HomePage";
import NavBar from "../features/Nav/NavBar";
import SandBox from "../features/sandbox/sandBox";

import "./style.css";

function App() {
  const { key } = useLocation();
  return (
    <>
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailed} />
              <Route path="/sandbox" component={SandBox} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                component={EventForm}
                key={key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
