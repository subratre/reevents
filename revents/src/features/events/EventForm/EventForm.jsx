import React from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

const EventForm = ({ setFormOpen }) => {
  return (
    <Segment clearing>
      <Header content="Create new Event" />
      <Form>
        <Form.Field>
          <input type="text" placeholder="event title" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Category" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Description" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="city" />
        </Form.Field>
        <Form.Field>
          <input type="text" placeholder="Venue" />
        </Form.Field>
        <Form.Field>
          <input type="date" placeholder="Date" />
        </Form.Field>
        <Button type="submit" positive floated="right" content="Submit" />
        <Button
          type="submit"
          floated="right"
          content="cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
