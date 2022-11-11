import "./registerForm.css";
import RegisterFormPage1 from "./registerFormPages/RegisterFormPage1";
import RegisterFormPage2 from "./registerFormPages/RegisterFormPage2";
import RegisterFormPage3 from "./registerFormPages/RegisterFormPage3";

import React, { Component } from "react";
import { Field, Form, Formik, FormikConfig, FormikValues } from "formik";
import { Card, CardContent, Checkbox, TextField } from "@mui/material";
import SubscriptionPlan from "./subscriptionPlan/SubscriptionPlan";
import { useState } from "react";

//www.youtube.com/watch?v=l3NEC4McW3g&ab_channel=BrunoAntunes

https: export default function RegisterForm() {
  return (
    <div className="registerFormWrapper">
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={{
              email: "",
              password: "",
              passwordRepeat: "",
              firstName: "",
              lastName: "",
              birthDate: "",
              address: "",
              city: "",
              state: "",
              zip: "",
            }}
          >
            <Form autoComplete="off">
              <Field
                name="email"
                type="email"
                component={TextField}
                label="Email Address"
              />
              <Field
                name="password"
                type="password"
                component={TextField}
                label="Password"
              />
              <Field
                name="passwordRepeat"
                type="password"
                component={TextField}
                label="Repeat Password"
              />

              <Field
                name="firstName"
                component={TextField}
                label="First Name"
              />
              <Field name="lastName" component={TextField} label="Last Name" />
              <label>
                <Field name="terms" type="checkbox" component={Checkbox} />I
                agree to terms and conditions.
              </label>
            </Form>
          </FormikStepper>
        </CardContent>
      </Card>
    </div>
  );
}

export function FormikStepper({ children, ...props }: FormikConfig<Values>) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStap] = useState(0);
  return (
    <Formik {...props}>
      <Form autoComplete="off">{children}</Form>
    </Formik>
  );
}
