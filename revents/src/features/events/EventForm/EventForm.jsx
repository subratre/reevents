import cuid from "cuid";
import React, { useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";

const EventForm = ({
  setFormOpen,
  handleEvents,
  selectedEvent,
  updateEvent,
}) => {
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };
  const [values, setValues] = useState(initialValues);
  const handleFormInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = () => {
    selectedEvent
      ? updateEvent({ ...selectedEvent, ...values })
      : handleEvents({
          ...values,
          attendees: [],
          id: cuid(),
          hostedBy: "Subrat",
          hostPhotoUrl: "/assets/user.png",
        });
    setFormOpen(false);
  };
  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit the Event" : "Create new Event"} />
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="event title"
            value={values.title}
            name="title"
            onChange={handleFormInput}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Category"
            value={values.category}
            name="category"
            onChange={handleFormInput}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Description"
            onChange={handleFormInput}
            value={values.description}
            name="description"
            onChange={handleFormInput}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="city"
            value={values.city}
            name="city"
            onChange={handleFormInput}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="text"
            placeholder="Venue"
            name="venue"
            value={values.venue}
            onChange={handleFormInput}
          />
        </Form.Field>
        <Form.Field>
          <input
            type="date"
            placeholder="Date"
            value={values.date}
            name="date"
            onChange={handleFormInput}
          />
        </Form.Field>
        <Button type="submit" positive floated="right" content="Submit" />
        <Button
          type="button"
          floated="right"
          content="cancel"
          onClick={() => setFormOpen(false)}
        />
      </Form>
    </Segment>
  );
};

export default EventForm;
