import React from "react";
import { Button, Container, Menu } from "semantic-ui-react";

const SignedOutMenu = ({ authenticated }) => {
  return (
    <Menu.Item position="right">
      <Button
        basic
        inverted
        content="log in"
        onClick={() => authenticated(true)}
      />

      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
