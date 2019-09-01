import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import employeeActions from '../../redux/employees/actions';
import UserTable from '../../components/Molecules/UserTable';
import Card from '../../components/Cells/Card';
import Well from '../../components/Cells/Well';
import JustifyBlock from '../../components/Cells/JustifyBlock';
import SearchBar from '../../components/Cells/SearchBar';

class UserCreate extends Component {
  render() {
    return (
      <Container fluid={true}>
          <Row>
            <Col xs={12}>
              <JustifyBlock>
                <h5>Create Recipients</h5>
                <Link to="/create">
                  <Button>Create New Recipient</Button>
                </Link>
              </JustifyBlock>
              <Card>
                <Col xs={4}>
                        qwer
                </Col>
                <Col xs={12}>
                        asdf
                </Col>
              </Card>
            </Col>
          </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const employeeListData = state.employees.getEmployeesSuccess
    ? state.employees.employeeList.data.data
    : [];
  return {
    employees: state.employees,
    employeeListData: employeeListData,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getEmployees: data => dispatch(employeeActions.getEmployees(data)),
    deleteEmployees: data => dispatch(employeeActions.deleteEmployees(data)),
    patchEmployees: data => dispatch(employeeActions.patchEmployees(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreate);
