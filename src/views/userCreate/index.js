import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import statesActions from '../../redux/states/actions';
import employeesActions from '../../redux/employees/actions';

import Card from '../../components/Cells/Card';
import JustifyBlock from '../../components/Cells/JustifyBlock';
import CreateUserForm from '../../components/Molecules/CreateUserForm';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.createUserFormRef = React.createRef();
    this.state = {
      phone: null,
    };
  }

  componentDidMount() {
    this.props.getStates();
  }

  componendDidUpdate() {
    //this.refs['create-user-form'].form.reset();
  }

  _validatePhone = () => {
    if (!this.state.phone) {
      return null;
    } else if (this.state.phone.match('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')) {
      return true;
    } else {
      return false;
    }
  };

  _formatFormData = form => {
    //set the status to whatever the default is.. also done by db
    let formattedData = {
      status: process.env.DEFAULT_STATUS || 'active',
    };
    for (var i = 0, len = form.length; i < len; i++) {
      //filter out the submit button
      if (form[i].name !== '') {
        //relies on the form's name field matching the column name in the db
        formattedData[form[i].name] = form[i].value;
      }
    }
    //turn the id back into a number
    formattedData.state_id = parseInt(formattedData.state_id);
    return formattedData;
  };

  _handleSubmit = e => {
    const form = e.currentTarget;
    if (this._validatePhone() && form.checkValidity() === true) {
      this.props.postEmployees(this._formatFormData(form));
      e.preventDefault();

      const resetFormOnSuccess = setInterval(() => {
        if (this.props.postingEmployee) {
          return;
        } else if (this.props.employees.postEmployeesSuccess) {
          this.createUserFormRef.current.reset();
          clearInterval(resetFormOnSuccess);
        } else {
          clearInterval(resetFormOnSuccess);
        }
      }, 100);
    } else {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  render() {
    const phoneValid = this._validatePhone();

    return (
      <Container fluid={true}>
        <Row>
          <Col xs={12}>
            <JustifyBlock>
              <h5>Create New Recipient</h5>
              <Link to="/">Cancel</Link>
            </JustifyBlock>
            <LoadingOverlay
              active={this.props.postingEmployee}
              spinner
              text="Sending request to server">
              <Card>
                <CreateUserForm
                  ref={this.createUserFormRef}
                  loading={this.props.statesOptions.length === 0 ? true : false}
                  handleSubmit={this._handleSubmit}
                  statesOptions={this.props.statesOptions}
                  phoneValid={phoneValid}
                  onChangePhone={e => {
                    this.setState({ phone: e.target.value });
                  }}
                />
              </Card>
            </LoadingOverlay>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const statesOptions = state.states.getStatesSuccess
    ? state.states.statesList.data.map(item => {
        return (
          <option value={item.id} key={item.id}>
            {item.name}
          </option>
        );
      })
    : [];
  return {
    ...state,
    states: state.states,
    statesOptions: statesOptions,
    postingEmployee: state.employees.posting,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getStates: data => dispatch(statesActions.getStates(data)),
    postEmployees: data => dispatch(employeesActions.postEmployees(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCreate);
