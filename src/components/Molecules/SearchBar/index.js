import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = props => {
  const propClasses = props.className ? 'searchbar ' + props.className : 'searchbar';
  return (
    <Form className={propClasses} onSubmit={props.onSubmit}>
      <Form.Control disabled={true} name='search' placeholder="Search" />
    </Form>
  );
};

export default SearchBar;
