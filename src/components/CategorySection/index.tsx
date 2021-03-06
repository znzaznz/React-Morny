import React, {useState} from 'react';
import styled from "styled-components";

const CategorySection = styled.section`
    font-size: 24px;
    > ul{
      display: flex;
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

type Props = {
    value:string,
    onChange:Function
}
export default function Index(props:Props) {
    const  categoryMap = {"-":'支出','+':"收入"}
    type Y = keyof typeof categoryMap
    const [categoryList] = useState<Y[]>(["-",'+'])
    return (
        <>
            <CategorySection>
                <ul>
                    {categoryList.map(c=>{
                       return <li className={props.value === c ? "selected" : ""} onClick={()=>props.onChange(c)} key={c}>
                           {categoryMap[c]}
                       </li>
                    })}
                </ul>
            </CategorySection>
        </>
    )
}