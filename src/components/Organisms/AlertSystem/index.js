import React from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import employeesActions from '../../../redux/employees/actions';

class AlertSystem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let alert;

    if (this.props.employees.error) {
      let message;

      try {
        message = JSON.stringify(this.props.employees.error.response.data);
      } catch (e) {
        console.log('error creating alert: ', e);
        message = this.props.employees.error.message;
      }

      alert = (
        <Alert
          variant="danger"
          dismissible
          onClose={() => {
            this.props.clearEmployeesError();
          }}>
          {message}
        </Alert>
      );
    }

    if (this.props.employees.postEmployeesSuccess) {
      try {
        alert = (
          <Alert
            variant="success"
            dismissible
            onClose={() => {
              this.props.clearEmployeesSuccess();
            }}>
            Success!
          </Alert>
        );
      } catch (e) {
        console.log('error creating alert: ', e);
      }
    }

    return (
      <>
        {alert}
        {this.props.children}
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    clearEmployeesError: data =>
      dispatch(employeesActions.clearEmployeesError(data)),
    clearEmployeesSuccess: data =>
      dispatch(employeesActions.clearEmployeesSuccess(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertSystem);
