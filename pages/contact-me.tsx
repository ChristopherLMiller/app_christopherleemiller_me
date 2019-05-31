import styled from 'styled-components';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { withLayout } from '../components/layout/Layout';
import Card from '../components/Card';
import { SocialLinks } from '../components/SocialLinks';
import { Sidebar } from '../components/Sidebar';

const title = `Contact Me`;
const description = `How to reach me with any comments, questions, and concerns regarding anything you see here!`;

// form validation schema
const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(`How can I contact you?`),
  name: Yup.string().required(`What's your name?`),
  message: Yup.string().required(`What do you need help with?`),
});

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 66% auto;
`;

const ContactPage = () => (
  <main>
    <StyledGrid>
      <Card
        heading="Send me a message"
        subHeading="Got a question?  Looking for some work to be done?  I'd love to hear from you.  Send me a message and I'll reply as soon as possible."
      >
        <Formik
          initialValues={{ email: ``, name: ``, subject: `` }}
          onSubmit={(values, actions) => {
            console.log(`Submit form`);
            console.log(values, actions);
          }}
          validationSchema={ContactSchema}
        >
          {({ errors, status, touched, isSubmitting }) => (
            <Form>
              {console.log(errors, status, touched, isSubmitting)}

              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" placeholder="Email Address" />
              <ErrorMessage name="email" component="div" />
              <Field type="textarea" name="Message" />
              <ErrorMessage name="message" component="div" />
              {status && status.msg && <div>{status.msg}</div>}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </Card>
      <SocialLinks />
    </StyledGrid>
  </main>
);

export default withLayout(ContactPage, title, description, `/contact-me`);
