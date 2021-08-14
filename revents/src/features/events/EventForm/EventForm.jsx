import cuid from "cuid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Header, Segment, FormField, Label } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import * as Yup from "yup";
import { MyTextInput } from "../../../App/Common/Form/MyTextInput";
import { MyFormTextArea } from "../../../App/Common/Form/MyFormTextArea";
import { MySelectInput } from "../../../App/Common/Form/MySelectInput";
import { categoryData } from "../../../App/api/categoryOption";
import { MyDateInput } from "../../../App/Common/Form/MyDateInput";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.events.events.find((e) => e.id === match.params.id)
  );
  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("you must provide a title"),
    category: Yup.string().required("you must provide a category"),
    description: Yup.string().required("you must provide a description"),
    city: Yup.string().required("you must provide a category"),
    venue: Yup.string().required("you must provide a category"),
    date: Yup.string().required("you must provide a category"),
  });

  return (
    <Segment clearing>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          selectedEvent
            ? dispatch(updateEvent({ ...selectedEvent, ...values }))
            : dispatch(
                createEvent({
                  ...values,
                  attendees: [],
                  id: cuid(),
                  hostedBy: "Subrat",
                  hostPhotoUrl: "/assets/user.png",
                })
              );
          history.push("/events");
        }}
        validationSchema={validationSchema}
      >
        {({ isSubmitting, dirty, isValid }) => (
          <Form className="ui form">
            <Header sub color="teal" content="Event Details" />
            <MyTextInput name="title" placeholder="Event Title" />
            <MySelectInput
              name="category"
              placeholder="category"
              options={categoryData}
            />
            <MyFormTextArea
              name="description"
              placeholder="description"
              rows={3}
            />
            <MyTextInput name="city" placeholder="city" />
            <MyTextInput name="venue" placeholder="venue" />
            <MyDateInput
              name="date"
              placeholderText="Event date"
              timeFormat="HH:mm"
              showTimeSelect
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm a"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              positive
              floated="right"
              content="Submit"
            />
            <Button
              disabled={isSubmitting}
              as={Link}
              to="/events"
              type="button"
              floated="right"
              content="cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default EventForm;
