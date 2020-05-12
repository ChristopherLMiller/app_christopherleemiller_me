import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { useToasts } from "react-toast-notifications";
import { FieldSet } from "components/inputs/FieldSet";
import { Label } from "components/inputs/Label";
import { FormErrorMessage } from "components/inputs/ErrorMessage";
import * as Yup from "yup";
import styled from "styled-components";
import { FunctionComponent } from "react";
import { ButtonVisual } from "components/inputs/Buttons";

// used for targetting the modal for screen readers
Modal.setAppElement("#__next");

// Set some default styles to the modal
const ModalStyles = {
  overlay: {
    background: "#131313bf",
    zIndex: 9999,
  },
  content: {
    top: "20%",
    left: "25%",
    bottom: "20%",
    right: "25%",
    borderRadius: "none",
    border: "none",
    outline: "10px solid var(--main-color-transparent)",
  },
};

const ModalLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ModalLayoutColumn = styled.div`
  padding: 0 20px;

  &first
`;

const ModalLayoutHeader = styled.h3`
  color: var(--main-color);
  font-size: 3rem;
  text-align: center;
  text-decoration: underline;
`;

const StyledForm = styled.div`
  display: grid;
  grid-template-columns: repeat(50%, 2);
  input,
  textarea {
    width: 100%;
    font-size: var(--font-size-responsive);
    padding: 5px;
    display: block;
    font-family: var(--font-main);
    font-weight: 300;
  }
`;

// form validation schema
const LoginSchema = Yup.object().shape({
  identifier: Yup.string().required(`username or Email`),
  password: Yup.string().required(`Need Your Password`),
});

const ResetSchema = Yup.object().shape({
  email: Yup.string()
    .email(`Need a Valid Email`)
    .required(`What's Your Email?`),
});

interface iLoginModal {
  isModalOpen: boolean;
  setModalOpen: any;
}

const LoginModal: FunctionComponent<iLoginModal> = ({
  isModalOpen,
  setModalOpen,
}) => {
  // Toast Notifications
  //const { addToast } = useToasts();
  return (
    <Modal
      style={ModalStyles}
      isOpen={isModalOpen}
      contentLabel="Login Modal"
      shouldCloseOnOverlayClick={true}
      shouldFocusAfterRender={true}
      shouldCloseOnEsc={true}
      onRequestClose={() => setModalOpen(false)}
    >
      <ModalLayout>
        <ModalLayoutColumn>
          <ModalLayoutHeader>Login</ModalLayoutHeader>
          <Formik
            initialValues={{ identifier: "", password: "", general: "" }}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);
              console.log(values);
              // try logging in
              //@ts-ignore
              /*auth
                .signin(values.identifier, values.password)
                .then((response: any) => {
                  if (response.status === 200) {
                    setModalOpen(false);
                    addToast(`Woohoo! You're in!`, { appearance: "success" });
                  } else {
                    actions.setFieldError("general", response.message);
                    actions.setSubmitting(false);
                  }
                });*/
            }}
            validationSchema={LoginSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <StyledForm>
                  <FieldSet>
                    <Label htmlFor="identifier">Username: </Label>
                    <Field type="text" name="identifier" />
                    <FormErrorMessage>
                      <ErrorMessage name="identifier" component="div" />
                    </FormErrorMessage>
                  </FieldSet>
                  <FieldSet>
                    <Label htmlFor="password">Password: </Label>
                    <Field type="password" name="password" />
                    <FormErrorMessage>
                      <ErrorMessage name="password" component="div" />
                    </FormErrorMessage>
                  </FieldSet>
                  <FormErrorMessage>
                    <ErrorMessage name="general" component="div" />
                  </FormErrorMessage>
                  <ButtonVisual
                    type="submit"
                    aria-disabled={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Sign In
                  </ButtonVisual>
                </StyledForm>
              </Form>
            )}
          </Formik>
        </ModalLayoutColumn>
        <ModalLayoutColumn>
          <ModalLayoutHeader>Forgot Password</ModalLayoutHeader>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);

              // try logging in
              /*auth.requestPasswordReset(values.email).then(() => {
                setModalOpen(false);
                addToast(
                  "If an account with this email exists you will receive an email shortly to reset your password.",
                  { appearance: "success" }
                );
              });*/
            }}
            validationSchema={ResetSchema}
          >
            {({ isSubmitting }) => (
              <Form>
                <StyledForm>
                  <FieldSet>
                    <Label htmlFor="email">Email: </Label>
                    <Field type="email" name="email" />
                    <FormErrorMessage>
                      <ErrorMessage name="email" component="div" />
                    </FormErrorMessage>
                  </FieldSet>
                  <ButtonVisual
                    type="submit"
                    aria-disabled={isSubmitting}
                    disabled={isSubmitting}
                  >
                    Reset Password
                  </ButtonVisual>
                </StyledForm>
              </Form>
            )}
          </Formik>
        </ModalLayoutColumn>
      </ModalLayout>
    </Modal>
  );
};
export { LoginModal };
