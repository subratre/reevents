import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar({ setFormOpen }) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="Logo"
            style={{ marginRight: "15px" }}
          />{" "}
          Re-Events
        </Menu.Item>
        <Menu name="Events" />
        <Menu.Item>
          <Button
            positive
            inverted
            content="Create Event"
            onClick={() => setFormOpen(true)}
          />
        </Menu.Item>
        <Menu.Item position="right">
          <Button basic inverted content="log in" />

          <Button
            basic
            inverted
            content="Register"
            style={{ marginLeft: "0.5em" }}
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
