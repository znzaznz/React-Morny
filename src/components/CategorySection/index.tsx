import React from 'react';
import styled from "styled-components";

const CategorySection = styled.section`
    font-size: 24px;
    > ul{
      display: flex;
      background-color: #c4c4c4;
      > li{
        position: relative; 
        width: 50%;
        text-align: center;
        padding: 16px 0;
        &.selected::after{
          content: "";
          display: block;
          height: 3px;
          background-color: #333;
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
        }
      }
    }
`

export default function index() {
    return (
        <>
            <CategorySection>
                <ul>
                    <li className={"selected"}>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
        </>
    )
}