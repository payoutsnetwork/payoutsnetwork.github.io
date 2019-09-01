import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import { Container, Row, Col, Image } from 'react-bootstrap';

import employeeActions from '../../redux/employees/actions';
import userTableProps from '../../objects/userTable';
import Card from '../../components/Card';
import Well from '../../components/Well';

class UserManagement extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  render() {
    return (
      <Container fluid={true}>

        <Well>
          <Row>
            <Col xs={{ span: 10, offset: 2 }}>
              <Card>
                <ReactTable
                  loading={this.props.employees.getting}
                  data={this.props.employeeListData}
                  {...userTableProps}
                />
              </Card>
            </Col>
          </Row>
        </Well>
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
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement);
