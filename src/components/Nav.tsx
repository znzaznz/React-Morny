import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';
import {NavLink} from 'react-router-dom';


const NavWrapper = styled.nav`
  background-color: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      >a{
          display: flex;
          padding: 4px 0;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .icon{
            width: 24px;
            height: 24px;
          }
          &.selected{
            .icon{
              fill:red;
            }
            color: red;
          }
      }
    }
  }
`;
export default function Nav() {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to={"/tags"} activeClassName={'selected'}>
                        <Icon name={"tag"}/>
                        {"标签"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/money"} activeClassName={'selected'}>
                        <Icon name={"money"}/>
                        {"记账"}
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/statistics"} activeClassName={'selected'}>
                        <Icon name={"Statistics"}/>
                        {"统计"}
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
}