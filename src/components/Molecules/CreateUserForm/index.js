import React from 'react';
import { Form, Container, Col, Button } from 'react-bootstrap';

import CreateUserSkeleton from './skeleton';

const CreateUserForm = React.forwardRef((props, ref) => {
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
      <h4>Enter Recipient Details</h4>
      <Form ref={ref} onSubmit={props.handleSubmit}>
        <Form.Row>
          <Col xs={{ span: 5, offset: 0 }}>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              name="first_name"
              type="text"
              placeholder="i.e. Johnathon"
            />
          </Col>

          <Col xs={{ span: 5, offset: 1 }}>
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              required
              name="street_address"
              placeholder="i.e. 123 Forest Avenue"
            />
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={{ span: 5, offset: 0 }}>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              name="last_name"
              type="text"
              placeholder="i.e. Doe"
            />
          </Col>

          <Col xs={{ span: 3, offset: 1 }}>
            <Form.Label>City</Form.Label>
            <Form.Control
              required
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
              required
              name="email"
              type="email"
              placeholder="i.e. johndoe@gmail.com"
            />
          </Col>

          <Col xs={{ span: 3, offset: 1 }}>
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              name="state_id"
              defaultValue={-1}
              as="select">
              {statesOptions}
            </Form.Control>
          </Col>
        </Form.Row>

        <Form.Row>
          <Col xs={{ span: 3, offset: 0 }}>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              required
              name="phone"
              isValid={props.phoneValid === true}
              isInvalid={props.phoneValid === false}
              onChange={props.onChangePhone}
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
              required
              name="zip_code"
              type="text"
              placeholder="i.e. 92289"
            />
          </Col>
        </Form.Row>

        <Button type="submit">Save</Button>
      </Form>
    </Container>
  );
});

export default CreateUserForm;
