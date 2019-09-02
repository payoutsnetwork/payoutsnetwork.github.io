import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

import CreateUserSkeleton from './skeleton';

const CreateUserForm = props => {
  //console.log('form props', props);
  if (props.loading) {
    return <CreateUserSkeleton />;
  }

  const statesPlaceholder = (
    <option disabled value={-1} key={-1}>
      i.e. California
    </option>
  );

  const statesOptions = [statesPlaceholder, ...props.statesOptions];

  return (
    <Container fluid={true}>
      <h4 className="form-title">Enter Recipient Details</h4>
      <Form onSubmit={props.handleSubmit}>
        <Form.Row>
          <Col xs={{ span: 5, offset: 0 }}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.first_name.value || ''}
              isValid={props.formState.first_name.valid === true}
              isInvalid={props.formState.first_name.valid === false}
              name="first_name"
              type="text"
              placeholder="i.e. Johnathon"
            />
          </Col>

          <Col xs={{ span: 5, offset: 1 }}>
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.street_address.value || ''}
              isValid={props.formState.street_address.valid === true}
              isInvalid={props.formState.street_address.valid === false}
              name="street_address"
              placeholder="i.e. 123 Forest Avenue"
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={{ span: 5, offset: 0 }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.last_name.value || ''}
              isValid={props.formState.last_name.valid === true}
              isInvalid={props.formState.last_name.valid === false}
              name="last_name"
              type="text"
              placeholder="i.e. Doe"
            />
          </Col>

          <Col xs={{ span: 3, offset: 1 }}>
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.city.value || ''}
              isValid={props.formState.city.valid === true}
              isInvalid={props.formState.city.valid === false}
              name="city"
              type="text"
              placeholder="i.e. Irvine"
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={{ span: 5, offset: 0 }}>
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.email.value || ''}
              name="email"
              type="email"
              placeholder="i.e. johndoe@gmail.com"
            />
          </Col>

          <Col xs={{ span: 3, offset: 1 }}>
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.state_id.value || -1}
              isValid={props.formState.state_id.valid === true}
              isInvalid={props.formState.state_id.valid === false}
              name="state_id"
              as="select">
              {statesOptions}
            </Form.Control>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={{ span: 3, offset: 0 }}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.phone.value || ''}
              isValid={props.formState.phone.valid === true}
              isInvalid={props.formState.phone.valid === false}
              name="phone"
              type="text"
              placeholder="i.e. 123-456-7891"
            />
            <Form.Control.Feedback type="invalid">
              Please ensure format is 123-456-7891.
            </Form.Control.Feedback>
          </Col>

          <Col xs={{ span: 2, offset: 3 }}>
            <Form.Label>Zip</Form.Label>
            <Form.Control
              onChange={props.handleChange}
              value={props.formState.zip_code.value || ''}
              isValid={props.formState.zip_code.valid === true}
              isInvalid={props.formState.zip_code.valid === false}
              name="zip_code"
              type="text"
              placeholder="i.e. 92289"
            />
          </Col>
        </Form.Row>

        <Button className="submit" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default CreateUserForm;
