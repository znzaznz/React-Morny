import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TagsSection from '../components/TagsSection';
import NoteSection from '../components/NoteSection';


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
const NumberPadSection = styled.section`

`

export default function Money(){
    return (
        <Layout>
            <TagsSection/>
            <NoteSection/>
            <CategorySection>
                <ul>
                    <li className={"selected"}>支出</li>
                    <li>收入</li>
                </ul>
            </CategorySection>
            <NumberPadSection>
                <div>100</div>
                <div>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>OK</button>
                    <button>0</button>
                    <button>.</button>
                </div>
            </NumberPadSection>
        </Layout>
    )
}