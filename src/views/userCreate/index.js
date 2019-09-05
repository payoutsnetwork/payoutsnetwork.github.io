import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LoadingOverlay from 'react-loading-overlay';

import statesActions from '../../redux/states/actions';
import employeesActions from '../../redux/employees/actions';

import Card from '../../components/Cells/Card';
import JustifyBlock from '../../components/Cells/JustifyBlock';
import CreateUserForm from '../../components/Molecules/CreateUserForm';

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: {
        first_name: {},
        street_address: {},
        last_name: {},
        city: {},
        email: {},
        state_id: {},
        phone: {},
        zip_code: {},
        status: {
          value: process.env.REACT_APP_DEFAULT_STATUS || 'active',
          valid: true,
        },
      },
    };
    this.baseState = this.state;
  }

  componentDidMount() {
    this.props.getStates();
  }

  _handleChangeForm = e => {
    var obj = {formState: {...this.state.formState}};
    obj.formState[e.target.name] = {
      value: e.target.value,
      valid: this._validateInput(e),
    };
    this.setState({...obj});
  };

  _validateInput = e => {
    switch (e.target.name) {
      case 'phone':
        if (e.target.value.match('^[0-9]{3}-[0-9]{3}-[0-9]{4}$')) {
          return true;
        } else {
          return false;
        }

      //from SO a more practical implementation of RFC 2822
      case 'email':
        if (
          e.target.value.match(
            "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?",
          )
        ) {
          return true;
        } else {
          return false;
        }

      default:
        if (e.target.value === '') {
          return false;
        } else {
          return true;
        }
    }
  };

  _handleSubmit = e => {
    const formState = this.state.formState;
    const data = {
      first_name: formState.first_name.value,
      street_address: formState.street_address.value,
      last_name: formState.last_name.value,
      city: formState.city.value,
      email: formState.email.value,
      state_id: parseInt(formState.state_id.value),
      phone: formState.phone.value,
      zip_code: formState.zip_code.value,
      status: formState.status.value,
    };

    if (this._validateForm() === true) {
      e.preventDefault();
      this.props.postEmployees(data);

      const resetFormOnSuccess = setInterval(() => {
        if (this.props.postingEmployee) {
          return;
        } else if (this.props.employees.postEmployeesSuccess) {
          this.setState({...this.baseState});
          clearInterval(resetFormOnSuccess);
        } else {
          clearInterval(resetFormOnSuccess);
        }
      }, 100);
      return 'success';
    } else {
      e.preventDefault();
      e.stopPropagation();
      return 'fail';
    }
  };

  _validateForm = () => {
    const keys = Object.keys(this.state.formState);
    let isValid = true;

    for (var i = 0, len = keys.length; i < len; i++) {
      const key = keys[i];
      const valid = this.state.formState[key].valid;
      if (valid !== true) {
        let formState = this.state.formState;
        formState[key].valid = false;

        this.setState({formState: {...formState}});
        isValid = false;
      }
    }

    return isValid;
  };

  render() {
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
                  loading={this.props.statesOptions.length === 0 ? true : false}
                  statesOptions={this.props.statesOptions}
                  handleChange={this._handleChangeForm}
                  handleSubmit={this._handleSubmit}
                  formState={this.state.formState}
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
  mapDispatchToProps,
)(UserCreate);
