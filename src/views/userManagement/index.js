import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import employeeActions from '../../redux/employees/actions';
import UserTable from '../../components/Molecules/UserTable';
import Card from '../../components/Cells/Card';
import LoadMore from '../../components/Cells/LoadMore';
import JustifyBlock from '../../components/Cells/JustifyBlock';
import HorizontalCenterBlock from '../../components/Cells/HorizontalCenterBlock/';
import SearchBar from '../../components/Molecules/SearchBar';

class UserManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getEmployeesData: {
        page: 1,
        perPage: parseInt(process.env.REACT_APP_DEFAULT_PER_PAGE) || 15,
        sort: null,
      },
    };
    this.baseState = this.state;
  }

  componentDidMount() {
    this.props.getEmployees({ ...this.state.getEmployeesData });
  }

  _searchSubmit = e => {
    console.log('searching: ', e.target.search.value);
    e.preventDefault();
    e.target.reset();
  };

  _deleteEmployee = d => {
    this.props.deleteEmployees({
      employeeId: d.original.id,
      ...this.state.getEmployeesData,
    });
  };

  _patchEmployee = d => {
    this.props.patchEmployees({
      employeeId: d.original.id,
      ...this.state.getEmployeesData,
    });
  };

  _loadMoreEmployees = () => {
    var obj = { getEmployeesData: { ...this.state.getEmployeesData } };
    obj.getEmployeesData.perPage += parseInt(process.env.REACT_APP_DEFAULT_PER_PAGE) || 15;
      console.log(obj);
    this.setState({ ...obj }, () => {
      this.props.getEmployees({
        ...this.state.getEmployeesData,
      });
    });
  };

  _sortEmployees = newSort => {
    var obj = { getEmployeesData: { ...this.state.getEmployeesData } };
    obj.getEmployeesData.sort = newSort;
    this.setState({ ...obj }, () => {
      this.props.getEmployees({
        ...this.state.getEmployeesData,
      });
    });
  };

  render() {
    const last_page = this.props.employeeListLastPage;
    const cur_page = this.state.getEmployeesData.page;

    const more_exist = last_page === cur_page ? false : true;

    return (
      <Container fluid={true}>
        <Col xs={12}>
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
                onSortedChange={(newSorted, column, shiftKey) => {
                  this._sortEmployees(newSorted[0]);
                }}
                pageSize={
                  this.props.employees.getEmployeesSuccess
                    ? this.props.employees.employeeList.data.per_page
                    : null
                }
                loading={this.props.employees.getting || this.props.employees.patching || this.props.employees.deleting}
                data={this.props.employeeListData}
                deleteEmployee={this._deleteEmployee}
                patchEmployee={this._patchEmployee}
              />
              <hr />
              <HorizontalCenterBlock>
                <LoadMore
                  moreExist={more_exist}
                  onClick={this._loadMoreEmployees}
                />
              </HorizontalCenterBlock>
            </Col>
          </Card>
        </Col>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const employeeListData = state.employees.getEmployeesSuccess
    ? state.employees.employeeList.data.data
    : [];

  const employeeListLastPage = state.employees.getEmployeesSuccess
    ? state.employees.employeeList.data.last_page
    : null;
  return {
    employees: state.employees,
    employeeListData: employeeListData,
    employeeListLastPage: employeeListLastPage,
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
