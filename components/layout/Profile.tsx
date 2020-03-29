import styled from 'styled-components';
import { useState, Fragment } from 'react';
import posed from 'react-pose';
import { Props } from '../../styles/Themes';
import Modal from 'react-modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useToasts } from 'react-toast-notifications';
import { FieldSet } from '../inputs/FieldSet';
import { Label } from '../inputs/Label';
import { Button } from '../inputs/Buttons';
import { FormErrorMessage } from '../inputs/ErrorMessage';
import { useAuth } from '../../lib/hook/useAuth';
import * as Yup from 'yup';
import { useRouter } from 'next/router';


const ProfileContainer = styled.div`
  display: none;
  position: fixed;
  top: 110px;
  right: 20px;
  z-index: 10;
  flex-direction: column;
  align-items: flex-end;

  @media (min-width: ${(props: Props) => props.theme.sizes.small}) {
    display: flex;
  }
`;

const ProfilePicture = styled.img`
  border-radius: 50px;
  width: 50px;
`

const ProfileInfoPose = posed.div({
  open: {
    opacity: 1,
    height: 'auto',
    beforeChildren: true,
    staggerChildren: 100,
    delayChildren: 500,
  },
  closed: {
    opacity: 0,
    height: 0,
  }
});

const ProfileInfo = styled(ProfileInfoPose)`
  min-width: 200px;
  margin-top: 10px;
  position: relative;
  background: var(--background-light);
  box-shadow: var(--box-shadow);

  &:after {
    content: '\\A';
    width: 30px;
    height: 30px;
    position: absolute;
    top: -5px;
    right: 10px;
    background: var(--background-light);
    transform: rotateZ(45deg);
    z-index: -1;
  }
`;

const ProfileName = styled.div`
  background: var(--main-color);
  padding: 10px;
`;

const ProfileRole = styled.div`
  background: var(--main-color);
  padding: 10px;
  padding-top: 0;
  text-transform: uppercase;
`;

const ProfileInfoList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  font-size: 2rem;
`;

const ProfileInfoListItem = styled.li`
  border-bottom: 1px solid var(--background-dark);
  color: var(--text-color);
  text-transform: uppercase;
  text-align: center;
  line-height: 4rem;

  a {
    color: var(--text-color);
    cursor: pointer;
  }
`;

// used for targetting the modal for screen readers
Modal.setAppElement('#__next');

// Set some default styles to the modal
const ModalStyles = {
  overlay: {
    background: '#131313bf',
    zIndex: 9999,
  },
  content: {
    top: '20%',
    left: '25%',
    bottom: '20%',
    right: '25%',
    borderRadius: 'none',
    border: 'none',
    outline: '10px solid var(--main-color-transparent)'
  }
}

const ModalLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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

const Profile = () => {
  // state
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  // Toast Notifications
  const { addToast } = useToasts();

  const auth = useAuth();

  const avatarURL = `https://unavatar.now.sh/${auth.getUserName}`;

  const router = useRouter();

  return (
    <Fragment>
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
              initialValues={{ identifier: '', password: '', general: '' }}
              onSubmit={(values, actions) => {
                actions.setSubmitting(true);

                // try logging in
                auth.signin(values.identifier, values.password).then((response: any) => {
                  if (response.status === 200) {
                    setModalOpen(false);
                    addToast(`Woohoo! You're in!`, { appearance: 'success' });
                  } else {
                    actions.setFieldError('general', response.message);
                    actions.setSubmitting(false);
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
                    <FormErrorMessage>
                      <ErrorMessage name="general" component="div" />
                    </FormErrorMessage>
                    <Button type="submit" aria-disabled={isSubmitting} disabled={isSubmitting}>Sign In</Button>
                  </StyledForm>
                </Form>
              )}
            </Formik>
          </ModalLayoutColumn>
          <ModalLayoutColumn>
            <ModalLayoutHeader>Forgot Password</ModalLayoutHeader>
            <Formik
              initialValues={{ email: '' }}
              onSubmit={(values, { setSubmitting }) => {
                setSubmitting(true);

                // try logging in
                auth.requestPasswordReset(values.email).then(() => {
                  setModalOpen(false);
                  addToast('If an account with this email exists you will receive an email shortly to reset your password.', { appearance: 'success' });
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
      <ProfileContainer>
        <ProfilePicture src={avatarURL} onClick={() => setOpen(!isOpen)} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setTimeout(() => setOpen(false), 5 * 1000)} />
        <ProfileInfo pose={isOpen ? `open` : `closed`} initialPose="closed">
          <ProfileName>Hi, {auth.getUserName() || 'Guest'}</ProfileName>
          {auth.isAuthenticated && <ProfileRole>{auth.getUserRoleByName()}</ProfileRole>}
          <ProfileInfoList>
            {auth.isAuthenticated && <ProfileInfoListItem>My Account</ProfileInfoListItem>}
            {auth.isAuthenticated && <ProfileInfoListItem><a onClick={() => { auth.signout(); router.push('/'); }}>Logout</a></ProfileInfoListItem>}
            {!auth.isAuthenticated && <ProfileInfoListItem><a onClick={() => setModalOpen(true)}>Sign In</a></ProfileInfoListItem>}
          </ProfileInfoList>
        </ProfileInfo>
      </ProfileContainer>
    </Fragment >
  )

}

export { Profile }