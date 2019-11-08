import styled from 'styled-components';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useToasts } from 'react-toast-notifications';
import { withLayout } from '../components/layout/withLayout';
import Card from '../components/Card';
import { SocialLinks } from '../components/SocialLinks';
import { Main } from '../styles/Generics';
import { Props } from '../styles/Themes';
import { getAuth } from '../utils/functions/AuthChecker';
import { Label } from '../components/inputs/Label';
import { FieldSet } from '../components/inputs/FieldSet';
import { Button } from '../components/inputs/Button';
import { FormErrorMessage } from '../components/inputs/ErrorMessage';

const title = `Contact Me`;
const description = `How to reach me with any comments, questions, and concerns regarding anything you see here!`;

// form validation schema
const ContactSchema = Yup.object().shape({
  email: Yup.string()
    .email(`I need a valid email to reach you`)
    .required(`Best Contact Email??`),
  name: Yup.string().required(`What's your name?`),
  message: Yup.string().required(`What do you need help with?`),
});

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: auto;

  & > div:first-child {
    border-bottom: 1px solid var(--background-dark);
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    & > div:first-child {
      border-right: 1px solid var(--background-dark);
    }
    & > div:last-child {
      padding-left: 5%;
    }
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.med_large}) {
    grid-template-columns: auto 350px;
  }
`;

const ContactColumn = styled.div`
  padding: 3% 5%;
`;

const StyledContactForm = styled.div`
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

const StyledContactFormFullWidth = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  padding-left: 0;
`;

const ContactFormEmailList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ContactPage = () => {
  getAuth();
  const { addToast } = useToasts();

  return (
    <Main>
      <Card
        heading="Send me a message"
        subHeading="Got a question?  Looking for some work to be done?  I'd love to hear from you.  Send me a message and I'll reply as soon as possible."
        padding={false}
      >
        <ContactGrid>
          <ContactColumn>
            <Formik
              initialValues={{ email: ``, name: ``, message: `` }}
              onSubmit={(values) => {
                // submit the fetch request
                fetch('https://email.christopherleemiller.me/email/contact', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'Application/JSON',
                  },
                  body: JSON.stringify(values),
                }).then(res => {
                  if (res.ok) {
                    addToast('Email Sent Successfully.  Thank you!', { appearance: 'info', autoDismiss: true });
                  }
                }).catch(error => {
                  addToast('Unable to send the email.  Try again later.', { appearance: 'error' })
                  console.log(error)
                })
              }}
              validationSchema={ContactSchema}
            >
              {({ isSubmitting }) => (
                <Form>
                  <StyledContactForm>
                    <FieldSet>
                      <Label htmlFor="name">
                        Name:{` `}
                      </Label>
                      <Field type="text" name="name" />
                      <FormErrorMessage>
                        <ErrorMessage name="name" component="span" />
                      </FormErrorMessage>
                    </FieldSet>
                    <FieldSet>
                      <Label htmlFor="email">
                        Email:{` `}
                      </Label>
                      <Field type="email" name="email" />
                      <FormErrorMessage>
                        <ErrorMessage name="email" component="span" />
                      </FormErrorMessage>
                    </FieldSet>

                    <StyledContactFormFullWidth>
                      <Label htmlFor="message">
                        Message:
                      </Label>
                      <Field component="textarea" name="message" rows="5" />
                      <FormErrorMessage>
                        <ErrorMessage name="message" component="span" />
                      </FormErrorMessage>
                    </StyledContactFormFullWidth>
                  </StyledContactForm>
                  <Button type="submit" disabled={isSubmitting} aria-disabled={isSubmitting}>
                    Send It!
                  </Button>
                </Form>
              )}
            </Formik>
          </ContactColumn>
          <ContactColumn>
            <h3>Alternate Ways</h3>
            <h4>Email</h4>
            <ContactFormEmailList>
              <li>
                <a href="mailto:info@christopherleemiller.me">Information</a>
              </li>
              <li>
                <a href="mailto:support@christopherleemiller.me">Support</a>
              </li>
              <li>
                <a href="mailto:social@christopherleemiller.me">Social Media</a>
              </li>
            </ContactFormEmailList>
            <h4>Phone</h4>
            <p>
              <a href="tel:+15743702148">+1 (574) 370-2148</a>
            </p>
            <SocialLinks />
          </ContactColumn>
        </ContactGrid>
      </Card>
    </Main >
  );
};
export default withLayout(ContactPage, { title, description, useSEO: true, path: `/contact-me` });
