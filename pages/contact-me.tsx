import styled from 'styled-components';
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import posed from 'react-pose';
import { useToasts } from 'react-toast-notifications';
import { withLayout } from '../components/layout/withLayout';
import Card from '../components/Card';
import { SocialLinks } from '../components/SocialLinks';
import { Main } from '../styles/Generics';
import { Props } from '../styles/Themes';

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

const StyledContactFormFieldset = styled.fieldset`
  border: none;
  padding-left: 0;
`;

const StyledContactFormLabel = styled.label`
  display: block;
  text-align: left;
`;

const StyledContactFormFullWidth = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 3;
  border: none;
  padding-left: 0;
`;

const StyledContactFormErrorMessage = styled.div`
  background: var(--main-color);
  color: var(--text-color-light);
  font-size: 1.5rem;
  line-height: 2rem;
`;

const ContactFormEmailList = styled.ul`
  list-style-type: none;
  padding-left: 0;
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

const ContactPage = () => {
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
              onSubmit={values => {
                fetch(`/api/contact`, {
                  method: `post`,
                  headers: {
                    Accept: `application/json`,
                    'Content-Type': `application/json`,
                  },
                  body: JSON.stringify(values),
                }).then(res => {
                  console.log(res);
                  addToast(`Your message has been sent.`, {
                    appearance: `info`,
                  });
                });
              }}
              validationSchema={ContactSchema}
            >
              {({ isSubmitting }) => (
                <Form>
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
    </Main>
  );
};
export default withLayout(ContactPage, title, description, true, `/contact-me`);
