import { Form, Formik } from "formik";
import React from "react";
import { Button, Modal } from "semantic-ui-react";
import ModalWrapper from "../../App/Common/modal/ModalWrapper";
import * as Yup from "yup";
import { MyTextInput } from "../../App/Common/Form/MyTextInput";
import { useDispatch } from "react-redux";
import { signInUser } from "./authAction";
import { closeModal } from "../../App/Common/modal/modalReducers";

const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <ModalWrapper size="mini" header="Sign in to Re-events">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string().required().email(),
          password: Yup.string().required(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(signInUser(values));
          setSubmitting(false);
          dispatch(closeModal());
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form className="ui form">
            <MyTextInput name="email" placeholder="Email Address" />
            <MyTextInput
              name="password"
              placeholder="Password"
              type="password"
            />
            <Button
              loading={isSubmitting}
              disabled={!isValid || !dirty || isSubmitting}
              type="submit"
              fluid
              size="large"
              color="teal"
              content="Login"
            />
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};

export default LoginForm;
