import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import x from "../icons/money.svg"

const  NavWapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul {
    display: flex;
    >li{
      width: 33.3%;
      text-align: center;
      padding: 16px;
    }
  }
`
export default function Nav(){
    return (
        <NavWapper>
            <ul>
                <li>
                    <img src={x} alt=""/>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWapper>
    )
}