import { Formik, ErrorMessage, Form, Field } from "formik";
import { Link } from "react-router-dom";
import { FieldContainer, AuthContainer, SideContent } from "./components";
import Logic from "./Logic";
function Login() {
  const { onSubmit, initialValues, validationSchema } = Logic();
  return (
    <AuthContainer>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form autoComplete="off" className="form">
              <Link to={'/'} className="back-a">
                <i className="fa-solid fa-arrow-left backBtn"></i>
              </Link>
              <h1>Welcome Back</h1>
              <p>Welcome back! please enter your details</p>

              <FieldContainer>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  component={"div"}
                  className="error__message"
                  name="email"
                />
              </FieldContainer>

              <FieldContainer>
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  component={"div"}
                  className="error__message"
                  name="password"
                />
              </FieldContainer>

              <Link to="/forgot-password">
                Forgot your password? Recover here
              </Link>

              <Link to="/signup">
                Don't have an account? Signup here
              </Link>

              <button type="submit">Signin</button>
            </Form>
          );
        }}
      </Formik>
      <SideContent>

      </SideContent>
    </AuthContainer>
  );
}

export default Login;
