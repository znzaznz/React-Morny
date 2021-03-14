import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

require('../icons/money.svg'); //这个跟vue中一样,不能直接用import导入
require("../icons/Statistics.svg")
require("../icons/tag.svg")

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
                <li>
                    <svg fill={'red'} className={'icon'}>
                        <use xlinkHref={'#tag'}/>
                    </svg>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <svg fill={"red"} className={"icon"}>
                        <use xlinkHref={"#money"}/>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg fill={"red"} className={"icon"}>
                        <use xlinkHref={"#Statistics"}/>
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    );
}