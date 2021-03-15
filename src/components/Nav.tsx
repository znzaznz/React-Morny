import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';


const NavWrapper = styled.nav`
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
                <Icon name={"tag"} value={"标签"} url={"/tags"}/>
                <Icon name={"money"} value={"记账"} url={"/money"}/>
                <Icon name={"Statistics"} value={"统计"} url={"/statistics"}/>
            </ul>
        </NavWrapper>
    );
}