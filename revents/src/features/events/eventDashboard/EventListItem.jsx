import React from "react";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttandee from "./EventListAttandee";
import { Link } from "react-router-dom";

const EventListItem = ({ event, selectEvent, handleDeleteEvent }) => {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted By {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {event.date}
          <Icon name="marker" /> {event.venue}
        </span>
      </Segment>
      <Segment secondary>
        <List horizontal>
          {event.attendees.map((atten) => (
            <EventListAttandee attende={atten} />
          ))}
        </List>
      </Segment>
      <Segment clearing>
        <div>Description of event</div>
        <Button
          color="red"
          floated="right"
          content="delete"
          onClick={() => handleDeleteEvent(event.id)}
        />
        <Button
          as={Link}
          to={`/events/${event.id}`}
          color="teal"
          floated="right"
          content="view"
        />
      </Segment>
    </Segment.Group>
  );
};

export default EventListItem;
