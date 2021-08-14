import React from "react";
import { useDispatch } from "react-redux";
import { Button, Container, Menu } from "semantic-ui-react";
import { openModal } from "../../App/Common/modal/modalReducers";

const SignedOutMenu = ({ authenticated }) => {
  const dispatch = useDispatch();
  return (
    <Menu.Item position="right">
      <Button
        basic
        inverted
        content="log in"
        onClick={() => dispatch(openModal({ modalType: "LoginForm" }))}
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
