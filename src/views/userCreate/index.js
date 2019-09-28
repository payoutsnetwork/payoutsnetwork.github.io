import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

import Card from "../../components/Cells/Card";
import JustifyBlock from "../../components/Cells/JustifyBlock";
import CreateUserForm from "../../components/Molecules/CreateUserForm";

export default function UserCreate(props) {
  const ajaxPosting = useSelector(state => state.employees.posting);

  return (
    <Container fluid={true}>
      <Row>
        <Col xs={12}>
          <JustifyBlock>
            <h5>Create New Recipient</h5>
            <Link to="/">Cancel</Link>
          </JustifyBlock>
          <LoadingOverlay
            active={ajaxPosting}
            spinner
            text="Sending request to server"
          >
            <Card>
              <CreateUserForm />
            </Card>
          </LoadingOverlay>
        </Col>
      </Row>
    </Container>
  );
}
