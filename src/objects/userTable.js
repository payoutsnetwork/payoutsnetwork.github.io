import React from 'react';

import helpers from '../helpers';
import Icon from '../components/Cells/Icon';

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
      Cell: d => {
        return <a href={'mailto:' + d.original.email}>{d.original.email}</a>;
      },
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
      width: 250,
      Cell: d => {
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
      width: 50,
      accessor: 'button',
      Cell: (d) => {
        return (
          <Icon
            onClick={(e) => {
              console.log('clicked user id:', d.original.id);
            }}
            className="red pointer">
            ⓧ
          </Icon>
        );
      },
    },
  ],
  manual: true,
  showPagination: false,
};

export default userTableProps;
