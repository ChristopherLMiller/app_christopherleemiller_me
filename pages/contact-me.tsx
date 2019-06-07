import styled from 'styled-components';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import posed from 'react-pose';
import { withLayout } from '../components/layout/Layout';
import Card from '../components/Card';
import { SocialLinks } from '../components/SocialLinks';
import { Props, Main } from '../styles/Themes';
import { Sidebar } from '../components/Sidebar';

const title = `Contact Me`;
const description = `How to reach me with any comments, questions, and concerns regarding anything you see here!`;

// form validation schema
const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email(`I need a valid email to reach you`)
    .required(`How can I contact you?`),
  name: Yup.string().required(`What's your name?`),
  message: Yup.string().required(`What do you need help with?`),
});

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 66% auto;
`;

const StyledContactForm = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;

  input,
  textarea {
    width: 100%;
    font-size: 0.75em;
    padding: 5px;
    display: block;
    font-family: var(--font-family);
    font-weight: 300;
  }
`;

const StyledContactFormFieldset = styled.fieldset`
  border: none;
  font-size: 1.5em;
`;

const StyledContactFormLabel = styled.label`
  display: block;
  text-align: left;
`;

const StyledContactFormFullWidth = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  font-size: 1.5em;
`;

const StyledContactFormErrorMessage = styled.div`
  background: var(--main-color);
  color: var(--text-color-light);
`;

const PosedButton = posed.button({
  hoverable: true,
  init: {
    scale: 1,
  },
  hover: {
    scale: 1.1,
  },
});

const StyledButton = styled(PosedButton)`
  background: var(--main-color);
  padding: 10px 30px;
  transition: all 0.25s;
  text-align: center;
  margin: 20px auto;
  max-width: 200px;
  letter-spacing: 2px;
  cursor: pointer;
  color: var(--text-color-light);
  font-size: 2rem;
  border: none;
`;

const ContactPage = () => (
  <Main>
    <StyledGrid>
      <Card
        heading="Send me a message"
        subHeading="Got a question?  Looking for some work to be done?  I'd love to hear from you.  Send me a message and I'll reply as soon as possible."
      >
        <Formik
          initialValues={{ email: ``, name: ``, message: `` }}
          onSubmit={(values, actions) => {
            console.log(JSON.stringify(values));
            fetch(`/api/contact`, {
              method: `post`,
              headers: {
                Accept: `application/json`,
                'Content-Type': `application/json`,
              },
              body: JSON.stringify(values),
            }).then(res => {
              console.log(`Submitted!`);
              alert(`Thank you`);
            });
          }}
          validationSchema={ContactSchema}
        >
          {({ errors, status, touched, isSubmitting, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <StyledContactForm>
                <StyledContactFormFieldset>
                  <StyledContactFormLabel htmlFor="name">
                    Name:{` `}
                  </StyledContactFormLabel>
                  <Field type="text" name="name" />
                  <StyledContactFormErrorMessage>
                    <ErrorMessage name="name" component="span" />
                  </StyledContactFormErrorMessage>
                </StyledContactFormFieldset>
                <StyledContactFormFieldset>
                  <StyledContactFormLabel htmlFor="email">
                    Email:{` `}
                  </StyledContactFormLabel>
                  <Field type="email" name="email" />
                  <StyledContactFormErrorMessage>
                    <ErrorMessage name="email" component="span" />
                  </StyledContactFormErrorMessage>
                </StyledContactFormFieldset>

                <StyledContactFormFullWidth>
                  <StyledContactFormLabel htmlFor="message">
                    Message:
                  </StyledContactFormLabel>
                  <Field component="textarea" name="message" rows="5" />
                  <StyledContactFormErrorMessage>
                    <ErrorMessage name="message" component="span" />
                  </StyledContactFormErrorMessage>
                </StyledContactFormFullWidth>
              </StyledContactForm>
              <StyledButton type="submit" aria-disabled={isSubmitting}>
                Send It!
              </StyledButton>
            </Form>
          )}
        </Formik>
      </Card>
      <Sidebar title="Other Methods To Reach Me">
        <SocialLinks />
        <h3>Email</h3>
        <p>
          <a href="mailto:info@christopherleemiller.me">
            info@christopherleemiller.me
          </a>
        </p>
        <h3>Phone</h3>
        <p>+1 (574) 370-2148</p>
      </Sidebar>
    </StyledGrid>
  </Main>
);

export default withLayout(ContactPage, title, description, `/contact-me`);
