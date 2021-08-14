import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import { signOutUser } from "../Auth/authAction";

const SignedInMenu = ({ signOut }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const history = useHistory();
  return (
    <Menu.Item position="right">
      <Image
        avatar
        spaced="right"
        src={currentUser.photoURL || "/assets/user.png"}
      />
      <Dropdown pointing="top left" text={currentUser.email}>
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/createEvent"
            text="Create event"
            icon="plus"
          />
          <Dropdown.Item text="My Prfoile" icon="user" />
          <Dropdown.Item
            text="Sign Out"
            icon="power"
            onClick={() => {
              dispatch(signOutUser());
              history.push("/");
            }}
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
