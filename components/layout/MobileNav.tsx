import { Button } from '../inputs/Buttons';
import Link from 'next/link';
import posed from 'react-pose';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import Nav from './Nav';
import { Props } from '../../styles/Themes';
import { useAuth } from '../../lib/hook/useAuth';
import { Avatar } from './elements/avatar';
import { useToasts } from 'react-toast-notifications';
import Modal from 'react-modal';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FieldSet } from '../inputs/FieldSet';
import { Label } from '../inputs/Label';
import { FormErrorMessage } from '../inputs/ErrorMessage';

const StyledMobileNav = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  background: var(--text-color);
  border-bottom: 2px solid var(--background-light);
  position: fixed;
  z-index: 999;


  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: none;
  }
`;
const StyledMobileNavWrapper = styled.div`
  position: relative;
  padding: 10px 20px;
`;

const StyledTitle = styled.h2`
  text-align: right;
  font-size: 2.75rem;
  margin: 0;
  padding: 0;
  vertical-align: top;
  &:hover {
    text-decoration: underline;
  }
  font-family: var(--font-alt);
  font-variant: petite-caps;
`;

const StyledDescription = styled.h3`
  margin: 0;
  text-align: right;
  color: var(--text-color-light);
`;

const Initials = styled.span`
  color: var(--main-color);
`;

const NameRest = styled.span`
  @media (max-width: 387px) {
    display: none;
  }
`;
const Dots = styled.span`
  color: var(--main-color);
  @media (min-width: 387px) {
    display: none;
  }
`;

const StyledHamburger = styled.button`
  text-transform: uppercase;
  background: none;
  color: var(--text-color-light);
  border: 2px solid var(--main-color);
  padding: 12px;
  position: absolute;
  font-size: 2rem;
  width: 110px;

  :focus,
  :hover {
    outline: 1px solid var(--text-color-light);
    background: var(--main-color);
  }

  @media print {
    display: none;
  }
`;

const Navigation = posed.div({
  closed: {
    height: `0vh`,
    opacity: 0,
    transform: `rotateX(-90deg)`,
  },
  open: {
    height: `calc(100vh - 75px)`,
    opacity: 1,
    transform: `rotateX(0deg)`,
  },
});

const StyledNavigationWrapper = styled(Navigation)`
  transition: all 0.5s;
  overflow-y: auto;
  transform: rotateX(-90deg);
  height: 0vh;
  opacity: 0;
  padding: 0 20px;
  transform-origin: top;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--text-color);
  overflow-x: hidden;
`;

const NavHr = styled.hr`
  width: 100%;
  margin: 0;
`;

const AccountWrapper = styled.div`
  font-family: var(--font-monospace);
  font-size: 2rem;
  color: var(--background-white);
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 15% auto;
  padding-bottom: 10px;
`;

const ProfileImage = styled.div``;
const ProfileInfo = styled.div`
  display: grid;
`;

const ProfileName = styled.span`
  font-size: 2.75rem;
`;

const ProfileRole = styled.span`
  font-size: 1.5rem;
  background: var(--main-color-transparent);
  text-transform: uppercase;
`;

const ProfileLinks = styled.ul`
  margin: 0;
  padding-left: 0;
`;

const PosedListItem = posed.li({
  open: {
    opacity: 1,
    x: `0%`,
  },
  closed: {
    opacity: 0,
    x: `-100%`,
  },
});

const ListItem = styled(PosedListItem)`
  position: relative;
  font-family: var(--font-monospace);
  font-size: 2.5rem;
  list-style-type: none;
  line-height: 2em;

  :after {
    content: '\\A';
    position: absolute;
    width: 100%;
    height: 100%;
    left: -100%;
    z-index: -1;
    background: var(--main-color);
    opacity: 0;
    transition: all 0.25s;
  }
  :hover:after {
    opacity: 0.7;
    left: -15%;
  }

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    font-size: 2rem;
    line-height: 2.5em;
  }
`;

// used for targetting the modal for screen readers
Modal.setAppElement('#__next');

// Set some default styles to the modal
const ModalStyles = {
  overlay: {
    background: '#131313bf',
    zIndex: 1000
  },
  content: {
    top: '5%',
    left: '5%',
    bottom: '5%',
    right: '5%',
    borderRadius: 'none',
    border: 'none',
    outline: '5px solid var(--main-color-transparent)',
  }
}

const ModalLayout = styled.div`
`

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
  }`;

// form validation schema
const LoginSchema = Yup.object().shape({
  identifier: Yup.string()
    .required(`username or Email`),
  password: Yup.string().required(`Need Your Password`),
});

const ResetSchema = Yup.object().shape({
  email: Yup.string().email(`Need a Valid Email`).required(`What's Your Email?`),
})

const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);
  const [menuText, setText] = useState(`Menu`);
  const [isModalOpen, setModalOpen] = useState(false);
  const auth = useAuth();

  // Toast Notifications
  const { addToast } = useToasts();

  useEffect(() => {
    function handleRouteChange() {
      setOpen(false);
    }
    Router.events.on(`routeChangeStart`, handleRouteChange);

    setText(isOpen ? `Close` : `Menu`);

    return function cleanup() {
      Router.events.off(`routeChangeStart`, handleRouteChange);
    };
  });

  return (
    <StyledMobileNav>
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
              initialValues={{ identifier: '', password: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                // try logging in
                auth.signin(values.identifier, values.password).then((response: any) => {
                  if (response.status === 200) {
                    setModalOpen(false);
                    addToast(`Woohoo! You're in!`, { appearance: 'success' });
                  } else {
                    addToast(response.message, { appearance: "error" });
                    setSubmitting(false);
                  }
                })
              }}
              validationSchema={LoginSchema}>
              {({ isSubmitting }) => (
                <Form>
                  <StyledForm>
                    <FieldSet>
                      <Label htmlFor="identifier">Username:{' '}</Label>
                      <Field type="text" name="identifier" />
                      <FormErrorMessage>
                        <ErrorMessage name="identifier" component="div" />
                      </FormErrorMessage>
                    </FieldSet>
                    <FieldSet>
                      <Label htmlFor="password">Password:{' '}</Label>
                      <Field type="password" name="password" />
                      <FormErrorMessage>
                        <ErrorMessage name="password" component="div" />
                      </FormErrorMessage>
                    </FieldSet>
                    <Button type="submit" aria-disabled={isSubmitting} disabled={isSubmitting}>Sign In</Button>
                  </StyledForm>
                </Form>
              )}
            </Formik>
          </ModalLayoutColumn>
          <NavHr />
          <ModalLayoutColumn>
            <ModalLayoutHeader>Forgot Password</ModalLayoutHeader>
            <Formik
              initialValues={{ email: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                // try logging in
                auth.requestPasswordReset(values.email).then((response: any) => {
                  if (response.status === 200) {
                    setModalOpen(false);  // close the modal
                    setOpen(false); // close the menu
                    addToast(response.message, { appearance: 'success' });
                  } else {
                    addToast(response.message, { appearance: "error" });
                    setSubmitting(false);
                  }
                })
              }}
              validationSchema={ResetSchema}>
              {({ isSubmitting }) => (
                <Form>
                  <StyledForm>
                    <FieldSet>
                      <Label htmlFor="email">Email:{' '}</Label>
                      <Field type="email" name="email" />
                      <FormErrorMessage>
                        <ErrorMessage name="email" component="div" />
                      </FormErrorMessage>
                    </FieldSet>
                    <Button type="submit" aria-disabled={isSubmitting} disabled={isSubmitting}>Reset Password</Button>
                  </StyledForm>
                </Form>
              )}
            </Formik>
          </ModalLayoutColumn>
        </ModalLayout>
      </Modal>
      <StyledMobileNavWrapper>
        <StyledHamburger onClick={() => setOpen(!isOpen)}>
          {menuText}
        </StyledHamburger>
        <Link href="/">
          <a>
            <StyledTitle>
              <Initials>C</Initials>
              <NameRest>hristopher </NameRest>
              <Initials>L</Initials>
              <NameRest>ee </NameRest>
              <Initials>M</Initials>
              <NameRest>iller</NameRest>
              <Dots>.Me</Dots>
            </StyledTitle>
          </a>
        </Link>
        <StyledDescription>All About Me!</StyledDescription>
      </StyledMobileNavWrapper>
      <StyledNavigationWrapper pose={isOpen ? `open` : `closed`}>
        <AccountWrapper>
          <ProfileContainer>
            <ProfileImage>
              <Avatar />
            </ProfileImage>
            <ProfileInfo>
              <ProfileName>{auth.getUserName() || 'Guest'}</ProfileName>
              <ProfileRole>{auth.getUserRoleByName() || 'Guest user'}</ProfileRole>
            </ProfileInfo>
          </ProfileContainer>
          <ProfileLinks>
            {auth.isAuthenticated && <ListItem>My Account</ListItem>}
            {auth.isAuthenticated && <ListItem onClick={() => auth.signout()}>Logout</ListItem>}
            {!auth.isAuthenticated && <ListItem onClick={() => setModalOpen(true)}>Sign In</ListItem>}
          </ProfileLinks>
        </AccountWrapper>
        <NavHr />
        <Nav />
      </StyledNavigationWrapper>
    </StyledMobileNav>
  );
};
export default MobileNav;
