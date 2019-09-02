import React from 'react';
import PNBrand from '../../../assets/img/pn_logo_blue_small.png';
import { Link } from 'react-router-dom';

const SideBar = props => {
  return (
    <>
      <table className="sidebar">
        <tbody>
          <tr>
            <td valign="top">
              <img src={PNBrand} alt="brand" />
              <hr />
            </td>
          </tr>
          <tr>
            <td valign="bottom">
              <table>
                <tbody>
                  {props.links.map(item => {
                    return (
                      <tr key={item.alt + item.to + item.image}>
                        <td>
                          <Link className="disabled" to={item.to}>
                            <img
                              className="small"
                              src={item.image}
                              alt={item.alt}
                            />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      {props.children}
    </>
  );
};

export default SideBar;
