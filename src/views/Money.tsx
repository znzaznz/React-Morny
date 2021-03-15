import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import TagsSection from '../components/TagsSection';


const NotesSection = styled.section`
    padding: 0 16px;
    font-size: 14px;
    > label{
      display: flex;
      align-items: center;
      >span{
        margin-right: 16px;
        white-space: nowrap;
      }
      >input{
        display: block;
        width: 100%;    
        height: 72px;    
        background: none;
        border: 0;
      }
    }
`
const CategorySection = styled.section`

`
const NumberPadSection = styled.section`

`

export default function Money(){
    return (
        <Layout>
            <TagsSection/>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder={"请在这里添加新的备注"}/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li>支出</li>
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