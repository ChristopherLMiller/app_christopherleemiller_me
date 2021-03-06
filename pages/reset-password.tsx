import Card from "components/Card";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FieldSet } from "components/inputs/FieldSet";
import { Label } from "components/inputs/Label";
import { FormErrorMessage } from "components/inputs/ErrorMessage";
import styled from "styled-components";
//import { useToasts } from "react-toast-notifications";
import { Layout } from "components/layout/PageLayout";

const title = `Reset Password`;
const description = `Reset your password here!`;

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

const resetSchema = Yup.object({
  password: Yup.string().required("Password is required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Password confirm is required"),
});
const ResetPasswordPage = () => {
  //const { addToast } = useToasts();
  const router = useRouter();

  if (router?.query?.code) {
    return (
      <Layout
        meta={{ title, description, useSEO: true, path: `/reset-password` }}
      >
        <Card
          heading="Reset Password"
          subHeading="Here you can reset your password to regain access to authenticated functions on the website.  Please enter a new password below."
        >
          <Formik
            initialValues={{ password: "", passwordConfirm: "" }}
            validationSchema={resetSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values, setSubmitting);
              // here we submit the data over to strapi to handle the actual changing of the password for the user
              /*auth
                .resetPassword(
                  values.password,
                  values.passwordConfirm,
                  router.query.code
                )
                .then((response: any) => {
                  if (response.status === 200) {
                    addToast("Password reset successful!", {
                      appearance: "success",
                    });
                    router.replace("/");
                  } else {
                    addToast(response.message, { appearance: "error" });
                    setSubmitting(false);
                  }
                });*/
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <StyledForm>
                  <FieldSet>
                    <Label htmlFor="password">New Password: </Label>
                    <Field type="password" name="password" />
                    <FormErrorMessage>
                      <ErrorMessage name="password" component="span" />
                    </FormErrorMessage>
                  </FieldSet>
                  <FieldSet>
                    <Label htmlFor="passwordConfirm">Confirm Password: </Label>
                    <Field type="password" name="passwordConfirm" />
                    <FormErrorMessage>
                      <ErrorMessage name="passwordConfirm" component="span" />
                    </FormErrorMessage>
                  </FieldSet>
                  <button
                    type="submit"
                    disabled={isSubmitting || !isValid}
                    aria-disabled={isSubmitting || !isValid}
                  >
                    Reset Password
                  </button>
                </StyledForm>
              </Form>
            )}
          </Formik>
        </Card>
      </Layout>
    );
  } else {
    router.replace("/");
    return null;
  }
};
export default ResetPasswordPage;
