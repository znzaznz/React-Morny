import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from './Icon';


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      display: flex;
      padding: 4px 0;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon{
        width: 24px;
        height: 24px;
      }
    }
  }
`;
export default function Nav() {
    return (
        <NavWrapper>
            <ul>
                <Icon name={"tag"} value={"标签"}/>
                <Icon name={"money"} value={"记账"}/>
                <Icon name={"Statistics"} value={"统计"}/>
            </ul>
        </NavWrapper>
    );
}