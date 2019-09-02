import React from 'react';
import ReactTable from 'react-table';

import helpers from '../../../helpers';
import Icon from '../../../components/Cells/Icon';
import CircleCross from '../../../assets/svg/CircleCross';
import CirclePlus from '../../../assets/svg/CirclePlus';

const UserTable = props => {
  const columns = [
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
        switch (d.original.status) {
          case 'active':
            return <span className="blue">Active</span>;
          case 'inactive':
            return <span className="grey">Inactive</span>;
          default:
            return helpers.capitalize(d.original.status);
        }
      },
    },
    {
      Header: '',
      sortable: false,
      width: 50,
      accessor: 'button',
      Cell: d => {
        switch (d.original.status) {
          case 'active':
            return (
              <div
                className="pointer"
                onClick={() => {
                  props.deleteEmployee(d);
                }}>
                <CircleCross className="icon red small" />
              </div>
            );
          case 'inactive':
            return (
              <div
                className="pointer"
                onClick={() => {
                  props.patchEmployee(d);
                }}>
                <CirclePlus className="icon blue small" />
              </div>
            );

          default:
            return '';
        }
      },
    },
  ];

  return (
    <ReactTable
      loading={props.loading}
      data={props.data}
      manual={true}
      showPagination={false}
      columns={columns}
    />
  );
};

export default UserTable;
