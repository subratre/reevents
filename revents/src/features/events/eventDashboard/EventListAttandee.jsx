import React from "react";
import { Image, List } from "semantic-ui-react";

const EventListAttandee = ({ attende }) => {
  return (
    <List.Item>
      <Image size="mini" circular src={attende.photoURL} />
    </List.Item>
  );
};

export default EventListAttandee;
