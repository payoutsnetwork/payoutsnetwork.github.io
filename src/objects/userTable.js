import React from 'react';

import helpers from '../helpers';
import Icon from '../components/Icon';

const userTableProps = {
  columns: [
    {
      Header: () => {
        return (
          <>
            <Icon>↕</Icon> Name
          </>
        );
      },
      accessor: 'name',
      Cell: d => {
        console.log(d);
        return d.original.first_name + ' ' + d.original.last_name;
      },
    },
    {
      Header: () => {
        return (
          <>
            <Icon>↕</Icon> Email
          </>
        );
      },
      accessor: 'email',
    },
    {
      Header: () => {
        return (
          <>
            <Icon>↕</Icon> Phone
          </>
        );
      },
      accessor: 'phone',
    },
    {
      Header: () => {
        return (
          <>
            <Icon>↕</Icon> Address
          </>
        );
      },
      accessor: 'address',
      Cell: d => {
        console.log(d);
        return `${d.original.street_address} ${d.original.city}, ${d.original.state_abbreviation} ${d.original.zip_code}`;
      },
    },
    {
      Header: () => {
        return (
          <>
            <Icon>↕</Icon> Status
          </>
        );
      },
      accessor: 'status',
      Cell: d => {
        return helpers.capitalize(d.original.status);
      },
    },
    {
      Header: '',
      sortable: false,
      accessor: 'button',
      Cell: () => {
        return 'x';
      },
    },
  ],
  manual: true,
  showPagination: false,
};

export default userTableProps;
