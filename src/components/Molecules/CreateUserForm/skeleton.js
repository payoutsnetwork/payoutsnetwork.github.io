import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const CreateUserSkeleton = props => {
        return <Container fluid={true}>
          <h4>
            <Skeleton />
          </h4>
          <Row>
            <Col xs={{ span: 5, offset: 0 }}>
              <Skeleton />
            </Col>
            <Col xs={{ span: 5, offset: 1 }}>
              <Skeleton />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 5, offset: 0 }}>
              <Skeleton count={2} />
            </Col>
            <Col xs={{ span: 3, offset: 1 }}>
              <Skeleton count={2} />
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 3, offset: 0 }}>
              <Skeleton/>
            </Col>
            <Col xs={{ span: 2, offset: 3 }}>
              <Skeleton/>
            </Col>
          </Row>
          <Row>
            <Col xs={{ span: 1, offset: 0 }}>
              <Skeleton/>
            </Col>
          </Row>
        </Container>
};

export default CreateUserSkeleton;
