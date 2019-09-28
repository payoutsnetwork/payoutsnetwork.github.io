import React, { useEffect } from "react";
import { Form, Container, Col, Button } from "react-bootstrap";
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import employeesActions from "../../../redux/employees/actions";
import statesActions from "../../../redux/states/actions";
import validate from "./CreateUserValidationRules";
import AsyncOptions from "./CreateUserAsyncOptions";
import CreateUserSkeleton from "./CreateUserSkeleton";

export default function CreateUserForm(props) {
  const statesList = useSelector(state => state.states.statesList);
  const dispatch = useDispatch();
  const { handleChange, handleSubmit, values, errors, isSubmitting, clearForm } = useForm(submit, validate, dispatch); // prettier-ignore
  const ajaxSucess = useSelector(state => state.employees.postEmployeesSuccess);

  useEffect(clearFormValues, [ajaxSucess]);
  useEffect(getStates, [dispatch]);

  function isLoading() {
    return statesList ? false : true;
  }

  function clearFormValues() {
    if (ajaxSucess) {
      clearForm();
    }
  }

  function getStates() {
    dispatch(statesActions.getStates());
  }

  function submit() {
    dispatch(employeesActions.postEmployees(values));
  }

  if (isLoading()) {
    return <CreateUserSkeleton />;
  } else {
    return (
      <Container fluid={true}>
        <h4 className="form-title">Enter Recipient Details</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col xs={{ span: 5, offset: 0 }}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.first_name || ""}
                isValid={isSubmitting && _.isEmpty(errors.first_name)}
                isInvalid={!_.isEmpty(errors.first_name)}
                name="first_name"
                type="text"
                placeholder="i.e. Johnathon"
              />
              <Form.Control.Feedback type="invalid">
                {errors.first_name}
              </Form.Control.Feedback>
            </Col>

            <Col xs={{ span: 5, offset: 1 }}>
              <Form.Label>Street Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.street_address || ""}
                isValid={isSubmitting && _.isEmpty(errors.street_address)}
                isInvalid={!_.isEmpty(errors.street_address)}
                name="street_address"
                placeholder="i.e. 123 Forest Avenue"
              />
              <Form.Control.Feedback type="invalid">
                {errors.street_address}
              </Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={{ span: 5, offset: 0 }}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.last_name || ""}
                isValid={isSubmitting && _.isEmpty(errors.last_name)}
                isInvalid={!_.isEmpty(errors.last_name)}
                name="last_name"
                type="text"
                placeholder="i.e. Doe"
              />
              <Form.Control.Feedback type="invalid">
                {errors.last_name}
              </Form.Control.Feedback>
            </Col>

            <Col xs={{ span: 3, offset: 1 }}>
              <Form.Label>City</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.city || ""}
                isValid={isSubmitting && _.isEmpty(errors.city)}
                isInvalid={!_.isEmpty(errors.city)}
                name="city"
                type="text"
                placeholder="i.e. Irvine"
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={{ span: 5, offset: 0 }}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.email || ""}
                isValid={isSubmitting && _.isEmpty(errors.email)}
                isInvalid={!_.isEmpty(errors.email)}
                name="email"
                placeholder="i.e. johndoe@gmail.com"
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Col>

            <Col xs={{ span: 3, offset: 1 }}>
              <Form.Label>State</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.state_id || -1}
                isint="true"
                isValid={isSubmitting && _.isEmpty(errors.state_id)}
                isInvalid={!_.isEmpty(errors.state_id)}
                name="state_id"
                as="select"
              >
                {AsyncOptions.getStatesOptions(statesList)}
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                {errors.state_id}
              </Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col xs={{ span: 3, offset: 0 }}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.phone || ""}
                isValid={isSubmitting && _.isEmpty(errors.phone)}
                isInvalid={!_.isEmpty(errors.phone)}
                name="phone"
                type="text"
                placeholder="i.e. 123-456-7891"
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone}
              </Form.Control.Feedback>
            </Col>

            <Col xs={{ span: 2, offset: 3 }}>
              <Form.Label>Zip</Form.Label>
              <Form.Control
                onChange={handleChange}
                value={values.zip_code || ""}
                isValid={isSubmitting && _.isEmpty(errors.zip_code)}
                isInvalid={!_.isEmpty(errors.zip_code)}
                name="zip_code"
                type="text"
                placeholder="i.e. 92289"
              />
              <Form.Control.Feedback type="invalid">
                {errors.zip_code}
              </Form.Control.Feedback>
            </Col>
          </Form.Row>

          <Button className="submit" type="submit">
            Save
          </Button>
        </Form>
      </Container>
    );
  }
}
