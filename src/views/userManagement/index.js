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

class UserManagement extends Component {
  componentDidMount() {
    this.props.getEmployees();
  }

  _searchSubmit = e => {
    console.log('searching: ', e.target.search.value);
    e.preventDefault();
    e.target.reset();
  };

  _deleteEmployee = d => {
    this.props.deleteEmployees({ employeeId: d.original.id });
  };

  _patchEmployee = d => {
    this.props.patchEmployees({ employeeId: d.original.id });
  };

  render() {
    return (
      <Container fluid={true}>
        <Well>
          <Row>
            <Col xs={{ span: 10, offset: 2 }}>
              <JustifyBlock>
                <h5>Manage Recipients</h5>
                <Link to="/create">
                  <Button>Create New Recipient</Button>
                </Link>
              </JustifyBlock>
              <Card>
                <Col xs={4}>
                  <SearchBar onSubmit={this._searchSubmit} />
                </Col>
                <Col xs={12}>
                  <UserTable
                    loading={this.props.employees.getting}
                    data={this.props.employeeListData}
                    deleteEmployee={this._deleteEmployee}
                    patchEmployee={this._patchEmployee}
                  />
                </Col>
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
    deleteEmployees: data => dispatch(employeeActions.deleteEmployees(data)),
    patchEmployees: data => dispatch(employeeActions.patchEmployees(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagement);
