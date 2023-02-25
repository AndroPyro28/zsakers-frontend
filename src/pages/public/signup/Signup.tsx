import { Formik, ErrorMessage, Form, Field } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FieldContainer,
  AuthContainer,
  SideContent,
  ButtonContainer,
} from "../login/components";
import Logic from "./Logic";

function Signup() {
  const [currentField, setCurrentField] = useState(0);
  const { onSubmit, initialValues, validationSchema,  handleFieldChange} = Logic({setCurrentField});

  const field = [
<>
                  <FieldContainer>
                    <label htmlFor="firstname">Firstname</label>
                    <Field
                      type="text"
                      name="firstname"
                      placeholder="Enter your firstname"
                    />
                    <ErrorMessage
                      component={"div"}
                      className="error__message"
                      name="firstname"
                    />
                  </FieldContainer>

                  <FieldContainer>
                    <label htmlFor="lastname">Lastname</label>
                    <Field
                      type="text"
                      name="lastname"
                      placeholder="Enter your lastname"
                    />
                    <ErrorMessage
                      component={"div"}
                      className="error__message"
                      name="lastname"
                    />
                  </FieldContainer>
                </>,
                <>
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
                  <label htmlFor="address">Address</label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                  />
                  <ErrorMessage
                    component={"div"}
                    className="error__message"
                    name="address"
                  />
                </FieldContainer>
              </>,
              <>
              <FieldContainer>
                <label htmlFor="contact">Contact</label>
                <Field
                  type="text"
                  name="contact"
                  placeholder="Enter your contact"
                />
                <ErrorMessage
                  component={"div"}
                  className="error__message"
                  name="contact"
                />
              </FieldContainer>
            </>,
             <>
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

               <FieldContainer>
                 <label htmlFor="confirmPassword">Confirm Password</label>
                 <Field
                   type="password"
                   name="confirmPassword"
                   placeholder="Enter your password confirmation"
                 />
                 <ErrorMessage
                   component={"div"}
                   className="error__message"
                   name="confirmPassword"
                 />
               </FieldContainer>
             </>
  ]
  
  return (
    <AuthContainer>
      <SideContent></SideContent>
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
              <h1>Welcome</h1>
              <p>Welcome! signup to start.</p>

              {field[currentField]}

              <Link to="/login">
                Already have an account? Login here
              </Link>

              <ButtonContainer>
                {currentField > 0 && <input type={'button'} value={'Prev'} onClick={() => handleFieldChange('prev')}></input>}
                {currentField < 3 && <input type={'button'} value={'next'} onClick={() => handleFieldChange('next')}></input>}
                {currentField === 3 && <button type="submit">Sign up</button>}
              </ButtonContainer>
            </Form>
          );
        }}
      </Formik>
    </AuthContainer>
  );
}

export default Signup;
