import React from 'react';
import PNBrand from '../../../assets/img/pn_logo_blue_small.png';
import openDoor from '../../../assets/img/openDoor.png';
import exit from '../../../assets/img/exit.png';
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
                  <tr>
                    <td>
                      <Link to="#">
                        <img className="small" src={exit} alt="logout" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to="#">
                        <img className="small" src={openDoor} alt="open" />
                      </Link>
                    </td>
                  </tr>
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
