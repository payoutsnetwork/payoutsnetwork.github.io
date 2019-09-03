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
        return <>Name</>;
      },
      accessor: 'name',
      sortable: false,
      Cell: d => {
        return d.original.first_name + ' ' + d.original.last_name;
      },
    },
    {
      Header: () => {
        return (
          <>
            <Icon id='jestSortEmail'>↕</Icon> Email
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
        return <>Address</>;
      },
      accessor: 'address',
      sortable: false,
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
            return <span className="blue bold">Active</span>;
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
                <CircleCross id="jestDeleteEmployee" className="icon red small" />
              </div>
            );
          case 'inactive':
            return (
              <div
                className="pointer"
                onClick={() => {
                  props.patchEmployee(d);
                }}>
                <CirclePlus id="jestPatchEmployee" className="icon blue small" />
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
      onSortedChange={props.onSortedChange}
      loading={props.loading}
      pageSize={props.pageSize}
      minRows={props.pageSize}
      data={props.data}
      manual={true}
      showPagination={false}
      columns={columns}
    />
  );
};

export default UserTable;
